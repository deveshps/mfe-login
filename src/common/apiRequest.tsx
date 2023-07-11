// import * as React from "react"
// import {useNavigate} from "react-router-dom"
import { localJsonData } from './localJsonApidata';
import { API_URL, MOCK_API_URL , LOGIN_API_URL, authRefreshURL} from './constant';

const fetchAPIData = async (endpointURL:string, type:string, params?:any, abortController:any = null, isWithoutAuth = false ) => {
    // const navigate = useNavigate()
    let LMS_API_URL = isWithoutAuth ? LOGIN_API_URL : API_URL
  const actualAPIURL = `${LMS_API_URL}${endpointURL}`;

  const getHeaders = () => {
    if (isWithoutAuth) {
      return {
        'Content-Type': 'application/json',
      }
    } else {
      return {
        'Content-Type': 'application/json',
        // "Access-Control-Allow-Origin": "*",
        'Authorization': `Bearer ${getAccessToken()}`,
      }
    }
  }

  try {
    const response = await fetch(actualAPIURL, {
      method: type,
      ...(type !== 'GET' && { body: JSON.stringify(params) }),
      ...(abortController && { signal: abortController.signal }),
      headers: getHeaders(),
    });

    if (response.ok) {
      const responseData = await response.json();
      return responseData;
      
      // {
      //   data: responseData,
      //   response: response, // Include the original response object
      // };
    }
    else if(response.status === 401) {
      if(endpointURL === authRefreshURL) {
        // navigate("/")
        window.location.href = "/"
        // window.location.href("/")
      } else {
        await refreshToken()
      }
    }
    else {
      throw new Error('API Error');
    }
  } catch (error) {
    console.error('Actual API is down:', error);
    try {
      const mockURL = `${MOCK_API_URL}${endpointURL}`;
      const getHeaderData:any = getHeaders()
      const mockResponse = await fetch(mockURL, {
        method: type,
        ...(type !== 'GET' && { body: JSON.stringify(params) }),
        // ...(abortController && { signal: abortController.signal }), //no need to pass abortController in mock if needed please uncomment
        headers: getHeaderData,
      });

      if (mockResponse.ok) {
        const mockData = await mockResponse.json();
        console.log('Mock API data:', mockData);
        return mockData;
        // {
        //   data: mockData,
        //   response: mockResponse, // Include the original response object
        // };
      } else {
        throw new Error('Mock API Error');
      }
    } catch (mockError) {
      console.error('Mock API is down:', mockError);
      try {
        const localResponse = await fetchLocalJson(endpointURL);

        if (localResponse) {
          return {
            data: localResponse,
            response: null, // No original response object for local JSON
          };
        } else {
          throw new Error('Local JSON not found');
        }
      } catch (localError) {
        console.error('Error fetching local JSON:', localError);
        throw new Error('All APIs are down');
      }
    }
  }
};

async function fetchLocalJson(endpointURL:string) {
  try {
    if (localJsonData.hasOwnProperty(endpointURL)) {
      return localJsonData[endpointURL];
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching local JSON:', error);
    return null;
  }
}

export function getAccessToken() {
  const accessToken = localStorage.getItem('access_token')
  if(accessToken !== null) {
    return accessToken
  } else return false
}

export async function refreshToken() {
  try {
    const accessToken = localStorage.getItem('access_token')
    const refreshToken = localStorage.getItem('refresh_token')
    const apiData = await fetchAPIData(authRefreshURL, "POST", { access_token: accessToken, refresh_token: refreshToken }, null, false)
    let result = apiData?.data
    let accessTokenExpiry = Date.now() + result['expires_in'] * 1000
    localStorage.setItem('access_token', result['access_token'])
    localStorage.setItem("refresh_token", result['refresh_token'])
    localStorage.setItem("access_token_expiry", accessTokenExpiry.toString())
  } catch (e) {
    console.error('Error fetching', e);
  }
}

export { fetchAPIData };

interface ApiRequest {
    endpointURL:string;
    type:string;
    params:any
    abortController?:any;
    isWithoutAuth?:boolean;
  }
