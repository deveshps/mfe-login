export const localJsonData:any = {
    "/api/v1/crm/category": [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
      { id: 3, name: "Bob" },
    ],
    "/api/v1/crm/products": [
      {
        id: "1",
        name: "name of the product",
        category: "category of the product",
        price: "price",
        tax: "tax like IGST(5%)",
        status: "Active/Inactive",
      },
      {
        id: "2",
        name: "name of the product",
        category: "category of the product",
        price: "price",
        tax: "tax like IGST(5%)",
        status: "Active/Inactive",
      },
    ],
    "/api/v1/crm/taxes": [
      {
        id: "1",
        name: "name of product mock",
        tax: "8%/12%",
        "taxClass": "IGST/CGST",
      },
      {
        id: "2",
        name: "name of product mock",
        tax: "8%/12%",
        "taxClass": "IGST/CGST",
      },
    ],
    "/api/v1/crm/profile-opportunity": [
      {
        id: 1,
        name: "Sample Opportunity 6",
        phone: "88888888",
        email: "test@gmail.com",
        website: "www.facebook.com",
        street: "stret",
        city: "city",
        state: "UK",
        zipCode: "357838",
        country: "india",
        source: "By Company",
        assignedTo: "Super Admin",
        comment: "test",
        status: "New",
        createdBy: "Alice",
        createdWeekday: "Wednesday",
        createdDate: "2023-05-10",
        createdTime: "07:14 PM",
      },
    ],
    "/api/v1/crm/quotations": [
      {
        id: 1,
        quotationNo: "QUO-001",
        fromDate: "2023-05-01",
        toDate: "2023-05-10",
        total: 5000,
        status: "Approved",
        createdBy: "John",
        createdOn: "Saturady",
      },
      {
        id: 2,
        quotationNo: "QUO-002",
        fromDate: "2023-05-12",
        toDate: "2023-05-15",
        total: 3000,
        status: "Pending",
        createdBy: "Alice",
        createdOn: "Saturady",
      },
    ],
    "/ap1/v1/crm/appointments": [
      {
        id: 1,
        name: "John Doe",
        weekday: "Monday",
        date: "2023-06-05",
        time: "09:00 AM",
        appointmentName: "Check-up",
        createdBy: "Dr. Smith",
        createWeekday: "Sunday",
        createDate: "2023-06-04",
        createTime: "08:30 PM",
        companyNo: "+91-9829289292",
      },
      {
        id: 2,
        name: "Jane Smith",
        weekday: "Wednesday",
        date: "2023-06-07",
        time: "02:30 PM",
        appointmentName: "Dental Cleaning",
        createdBy: "Dr. Johnson",
        createWeekday: "Monday",
        createDate: "2023-06-05",
        createTime: "11:45 AM",
        companyNo: "+91-9829289292",
      },
      {
        id: 3,
        name: "Michael Brown",
        weekday: "Friday",
        date: "2023-06-09",
        time: "11:00 AM",
        appointmentName: "Physical Therapy",
        createdBy: "Dr. Anderson",
        createWeekday: "Tuesday",
        createDate: "2023-06-06",
        createTime: "03:15 PM",
        companyNo: "+91-9829289292",
      },
    ],
    "/ap1/v1/crm/quotations": [
      {
        id: 1,
        quotationNo: "QUO-001",
        fromDate: "2023-05-01",
        toDate: "2023-05-10",
        total: 5000,
        status: "Approved",
        createdBy: "John",
        createdWeekday: "Monday",
        createdDate: "2023-05-01",
        createdTime: "07:14 PM",
      },
      {
        id: 2,
        quotationNo: "QUO-002",
        fromDate: "2023-05-12",
        toDate: "2023-05-15",
        total: 3000,
        status: "Pending",
        createdBy: "Alice",
        createdWeekday: "Wednesday",
        createdDate: "2023-05-10",
        createdTime: "07:14 PM",
      },
      {
        id: 3,
        quotationNo: "QUO-003",
        fromDate: "2023-05-20",
        toDate: "2023-05-25",
        total: 7000,
        status: "Rejected",
        createdBy: "Bob",
        createdWeekday: "Friday",
        createdDate: "2023-05-18",
        createdTime: "07:14 PM",
      },
    ],
    "/ap1/v1/crm/contacts": [
      {
        id: 1,
        name: "John Doe",
        designation: "Manager",
        phone: "123-456-7890",
        email: "johndoe@example.com",
        createdBy: "Alice",
        createdWeekday: "Wednesday",
        createdDate: "2023-05-10",
        createdTime: "07:14 PM",
        status: "Active",
        note: "Lorem ipsum dolor sit amet.",
      },
      {
        id: 2,
        name: "Jane Smith",
        designation: "Developer",
        phone: "987-654-3210",
        email: "janesmith@example.com",
        createdBy: "Alice",
        createdWeekday: "Wednesday",
        createdDate: "2023-05-10",
        createdTime: "07:14 PM",
        status: "Inactive",
        note: "Consectetur adipiscing elit.",
      },
      {
        id: 3,
        name: "Alice Johnson",
        designation: "Designer",
        phone: "555-123-4567",
        email: "alicejohnson@example.com",
        createdBy: "Alice",
        createdWeekday: "Wednesday",
        createdDate: "2023-05-10",
        createdTime: "07:14 PM",
        status: "Active",
        note:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
    "/api/v1/crm/notes": [
      {
        id: 1,
        name: "John Doe",
        createdBy: "Alice",
        createdWeekday: "Wednesday",
        createdDate: "2023-05-10",
        createdTime: "07:14 PM",
      },
      {
        id: 2,
        name: "John ",
        createdBy: "Alice",
        createdWeekday: "Wednesday",
        createdDate: "2023-05-10",
        createdTime: "07:14 PM",
      },
      {
        id: 3,
        name: "Mangieee",
        createdBy: "Alice",
        createdWeekday: "Wednesday",
        createdDate: "2023-05-10",
        createdTime: "07:14 PM",
      },
    ],
    "/api/v1/lms/lead/notes": [
      {
        id: 1,
        name: "lead name",
        description: "comment or description added",
        "created by": "name of the notes create user",
        "created on": "note create date",
      },
      {
        id: 2,
        name: "lead name",
        description: "comment or description added",
        "created by": "name of the notes create user",
        "created on": "note create date",
      },
    ],
    "/api/v1/crm/country": [
      {
        id: "1",
        name: "India",
      },
      {
        id: "2",
        name: "Aus",
      },
    ],
    "/api/v1/crm/currency": [
      {
        id: "1",
        currency: "currency name like Chine/ INR",
        sign: "sign of the currency",
      },
      {
        id: "2",
        currency: "currency name like Aus/ INR",
        sign: "sign of the currency",
      },
    ],
    "/api/v1/static-data": {
      mapProvider: "mapMyIndia",
      menuItems: [
        {
          category: "Dashboard",
          subcategory: [],
          path: "/",
        },
        {
          category: "Leads",
          subcategory: [
            {
              name: "Manage Leads",
              path: "leads",
            },
            {
              name: "Recycle Bin",
              path: "",
            },
          ],
          path: "",
        },
        {
          category: "Opportunity",
          subcategory: [
            {
              name: "Manage Opportunity",
              path: "opportunity",
            },
            {
              name: "Recycle Bin",
              path: "",
            },
          ],
          path: "",
        },
        {
          category: "Customers",
          subcategory: [
            {
              name: "Manage Customers",
              path: "customer-leads",
            },
            {
              name: "Recycle Bin",
              path: "",
            },
          ],
          path: "",
        },
        {
          category: "Catalog",
          subcategory: [
            {
              name: "Products",
              path: "catalog-products",
            },
            {
              name: "Category",
              path: "catalog-categories",
            },
            {
              name: "Taxes",
              path: "catalog-taxes",
            },
            {
              name: "Tax Class",
              path: "catalog-tax-class",
            },
          ],
          path: "",
        },
        {
          category: "Sales",
          subcategory: [
            {
              name: "Proposals",
              path: "",
            },
            {
              name: "Estimates",
              path: "",
            },
            {
              name: "Invoices",
              path: "",
            },
            {
              name: "Taxes",
              path: "",
            },
          ],
          path: "",
        },
        {
          category: "Expenses",
          subcategory: [
            {
              name: "Manage Expenses",
              path: "",
            },
            {
              name: "Manage Category",
              path: "",
            },
          ],
          path: "",
        },
        {
          category: "Support",
          subcategory: [],
          path: "",
        },
        {
          category: "Broadcast",
          subcategory: [
            {
              name: "News & Announcements",
              path: "",
            },
          ],
          path: "",
        },
        {
          category: "Reports",
          subcategory: [
            {
              name: "Accounting",
              path: "/reports",
            },
          ],
          path: "",
        },
        {
          category: "Staff",
          subcategory: [
            {
              name: "Add Staff",
              path: "/add-staff",
            },
            {
              name: "Manage Staff",
              path: "/manage-staff",
            },
            {
              name: "Roles",
              path: "/manage-role",
            },
          ],
          path: "",
        },
        {
          category: "Setup",
          subcategory: [
            {
              name: "Company Details",
              path: "",
            },
            {
              name: "Email Configuration",
              path: "",
            },
            {
              name: "Payment",
              path: "",
            },
            {
              name: "SMS",
              path: "",
            },
            {
              name: "Notification",
              path: "",
            },
            {
              name: "Country",
              path: "",
            },
            {
              name: "Currency",
              path: "",
            },
            {
              name: "Department",
              path: "",
            },
            {
              name: "Group",
              path: "",
            },
            {
              name: "Expenses Category",
              path: "",
            },
            {
              name: "Source",
              path: "",
            },
            {
              name: "Banner",
              path: "",
            },
            {
              name: "IP Security",
              path: "",
            },
          ],
        },
        {
          category: "Activities",
          subcategory: [],
          path: "activity-logs",
        },
        {
          category: "Logout",
          subcategory: [],
          path: "",
        },
      ],
      maxDiscount: 20,
      message: "Success",
      status: 1,
      timestamp: 1683656170963,
      requestId: "30481b24-87ae-4f3d-a1e7-90e04c52d3de",
    },
    "/api/v1/crm/tax-class": [
      {
        id: "1",
        Name: "tax class name like UGST/CGST/IGST mock",
      },
      {
        id: "2",
        Name: "tax class name like UGST/CGST/IGST mock",
      },
    ],
    "/api/v1/crm/activities": [
      {
        date: "986857657567(timestamp)",
        activity: "types <add lead,update lead>",
        IP: "System Ip",
        "Activity By": "Loged in user id like <super admin>",
      },
      {
        date: "986857657567(timestamp)",
        activity: "types <add lead,update lead>",
        IP: "System Ip",
        "Activity By": "Logged in user id like <super admin>",
      },
    ],
    "/api/v1/crm/dashboard": [
        {
          leads: [
            {
              name: "Lead Name",
              comapnyName: "dew",
              phonenumber: "7082046908",
              email: "abc@dispostable.com",
              date: 1686224114,
            },
            {
              name: "Lead Name",
              comapnyName: "dew",
              phonenumber: "7082046908",
              email: "abc@dispostable.com",
              date: 1686224114,
            },
          ],
          customers: [
            {
              name: "customer Name",
              phonenumber: "7082046908",
              email: "abc@dispostable.com",
              date: 1686224114,
            },
            {
              name: "customer Name",
              phonenumber: "7082046908",
              email: "abc@dispostable.com",
              date: 1686224114,
            },
          ],
          calls: [
            {
              name: "name of the customer",
              date: 1686224114,
              "call details": "description /message",
            },
            {
              name: "name of the customer",
              date: 1686224114,
              "call details": "description /message",
            },
          ],
          totalProducts: "1",
          totalCustomers: "2",
          totalQuotations: "2",
          totalInvoices: "2",
        },
      ],
  
    "/api/v1/crm/reports": {
      fileUrl:
        "https://d27ddijqdjn142.cloudfront.net/mrityunjaya/ProductConstruct_230323.xlsx",
    },
    "/api/v1/lms/lead": [
      {
        id: "1",
        Name: "Lead Name",
        companyName: "dew",
        phonenumber: "7082046908",
        email: "abc@dispostable.com",
        address: {
          street: "Haryana",
          city: "Delhi",
          state: "Delhi",
          zipcode: "131001",
          country: "India",
        },
        website: "Name",
        logo: "file to upload",
        interestedIn: "Lead interest",
        source: "where to know about this like facebook, twitter, linkedin etc",
        assignedTo: "staff member name",
        comment: "comment added",
        status: "New",
        contact: {
          contactName: "amit",
          phone: "01302276787",
          email: "abc@dewsolutions.in",
          designation: "eng",
        },
      },
    ],
  
    "/api/v1/crm/customers": [
      {
        id: "1",
        name: "customer name",
        phone: "phone number",
        email: "emailId of customer",
        assignedTo: "Super Admin",
        status: "Active",
        createdBy: "name of the user that create customer",
        createdOn: "date on which customer create",
      },
      {
        id: "2",
        name: "customer name",
        phone: "phone number",
        email: "emailId of customer",
        assignedTo: "Super Admin",
        status: "Active",
        createdBy: "name of the user that create customer",
        createdOn: "date on which customer create",
      },
    ],
  
    "/api/v1/crm/lead": [
      {
        id: "1",
        Name: "Lead Name",
        companyName: "dew",
        phonenumber: "7082046908",
        email: "abc@dispostable.com",
        address: {
          street: "Haryana",
          city: "Delhi",
          state: "Delhi",
          zipcode: "131001",
          country: "India",
        },
        website: "Name",
        logo: "file to upload",
        interestedIn: "Lead interest",
        source: "where to know about this like facebook, twitter, linkedin etc",
        assignedTo: "staff member name",
        comment: "comment added",
        status: "New",
        contact: {
          contactName: "amit",
          phone: "01302276787",
          email: "abc@dewsolutions.in",
          designation: "eng",
        },
      },
    ],
  
    "/api/v1/lms/leads/view?id=1": [
      {
        id: 1,
        name: "Sample lead 5",
        phone: "9999988888",
        email: "lead@gmail.com",
        "assigned to": "name of the user lead assigned",
        status: "new",
        "create by": "name of the user lead created",
        "created on": "date on which lead created",
      },
    ],
  
    "/api/v1/crm/expenses": [
      {
        "id": "3",
        "name": "name of the customer",
        "date": "timestamp",
        "title": "title of the expense",
        "category": "category of the expense like Travel Expenses",
        "amount": "amount of the expense",
        "createBy": "name of expense create the user",
        "createdOn": "date on which expense is created"
      }
    ],
  
    "/api/v1/crm/invoice": [
      {
        "id": "1",
        "Invoice number": "12",
        "date": "timestamp",
        "total": "amount",
        "status": "draft",
        "createdBy": "name of invoice created user",
        "createdOn": "date"
      },
      {
        "id": "2",
        "Invoice number": "12",
        "date": "timestamp",
        "total": "amount",
        "status": "draft",
        "createdBy": "name of invoice created user",
        "createdOn": "date"
      }
    ],
  
    "/api/v1/crm/opportunities": [
      {
        "id": "1",
        "name": "New Opportunity 1",
        "phone": "9876543210",
        "email": "example@email.com",
        "assignedTo": "John Smith",
        "status": "new",
        "createdBy": "Jane Doe",
        "createdOn": 1687344172
      },
      {
        "id": "2",
        "name": "New Opportunity 2",
        "phone": "9876543210",
        "email": "example@email.com",
        "assignedTo": "John Smith",
        "status": "new",
        "createdBy": "Jane Doe",
        "createdOn": 1687340000
      }
    ],
    "/api/v1/crm/opportunities/view?id=1": [
      {
        "id": "1",
        "name": "New Opportunity 1",
        "phone": "9876543210",
        "email": "example@email.com",
        "assignedTo": "John Smith",
        "website": "example.com",
        "street": "21 Jump Street",
        "city": "kyovashad",
        "state": "Fracture Peaks",
        "zipCode": "100001",
        "country": "Bag End",
        "source": "One Ring",
        "status": "new",
        "createdBy": "Jane Doe",
        "createdOn": "timestamp",
        "comment": "comment",
      }
    ],
    "/api/v1/crm/opportunities/view?id=2": [
      {
        "id": "2",
        "name": "New Opportunity 2",
        "phone": "9876543210",
        "email": "example@email.com",
        "assignedTo": "John Hancock",
        "website": "www.example.com",
        "street": "22 Jump Street",
        "city": "Manchester City",
        "state": "estate",
        "zipCode": "100001",
        "country": "Country",
        "source": "mana",
        "status": "new",
        "createdBy": "Johnny",
        "createdOn": "timestamp",
        "comment": "comment",
      }
    ],
    "/api/v1/lms/lead/calls": [
      {
        "id": 1,
        "date": "date on which call create",
        "callType": "type of call like outgoing/incoming",
        "callStatus": "under process",
        "createdBy": "name of the call create user",
        "createdOn": "call create date"
      },
      {
        "id": 2,
        "date": "date on which call create",
        "callType": "type of call like outgoing/incoming",
        "callStatus": "under process",
        "createdBy": "name of the call create user",
        "createdOn": "call create date"
      }
    ],
  
    "/api/v1/crm/customers/view?id=1": [
      {
        "id": "1", "name": "customer name", "image": "image url", "role": "assigned role",
        "contact": {
          "phoneNumber": "customer phone number", "email": "customer email"
        },
        "address": {
          "street": "street number", "city": "city name", "state": "state name", "zipCode": "131001", "country": "India"
        },
        "assigned to": "Super Admin", "status": "Active", "createdBy": "name of the user that create customer",
        "created on": "date on which customer create"
      }
    ],
  
      "/api/v1/crm/customerdetails" : [
            {
                     "id": "1", "name": "customer name", "image": "image url", "role": "assigned role", 
                         "contact": {
                                "phoneNumber": "customer phone number", "email": "customer email"
                         },
                         "address": {
                                "street": "street number",  "city": "city name", "state": "state name", "zipCode": "131001", "country": "India"
                         },
                      "assigned to": "Super Admin", "status": "Active", "createdBy": "name of the user that create customer",
                     "created on": "date on which customer create"
            }
        ],
  
    "profileURL": [
      {
        "id": 1,
        "profile picture": "uploaded file",
        "Template": "Name of the template",
        "Language": "language type like Hindi/English etc"
      }
    ],
    "/api/v1/crm/user-profile": [
      {
        "language": "hindi",
        "template": "template1",
      }
    ],
    "/api/v1/lms/lead?id=1": [
      {
        id: "1",
      }
    ],
    "/api/v1/crm/customers?id=1" : [
      {
          "id": "1"
      },
    ],
    "/api/v1/crm/lead-conversion": {
      id:"1",
      lead_detail:"lead 1",
    },
    "/api/v1/crm/customer-conversion": {
      id:"1",
      customer_detail:"lead 1",
    },
    "/api/v1/crm/opportunity-conversion": {
      id:"1",
      opportunity_detail:"lead 1",
    },
  
    "/api/v1/lms/notes" : [
      {  
          "id": 1, "name": "lead name", "description": "comment or description added", "created by": "name of the notes create user",
          "created on": "note create date"
      }
  ],
  
  }
  