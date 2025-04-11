const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
//const Helper = require("./helper");


const specificationsConditionItem = Joi.object().keys({
  fieldId: Joi.number().required(),
  choiceId: Joi.number().required(),
  optionId: Joi.number().required(),
})

const specificationItem = Joi.object().keys({
  packageId: Joi.string().trim().required(),
  minWidth: Joi.string().trim().optional().allow(""),
  maxWidth: Joi.string().trim().optional().allow(""),
  minHeight: Joi.string().trim().optional().allow(""),
  maxHeight: Joi.string().trim().optional().allow(""),
  maxUI: Joi.string().trim().optional().allow(""),
})

const specificationsUpdateItem = Joi.object().keys({
  action: Joi.string().trim().required(),
  specificationOptionId: Joi.string().trim().optional().allow(""),
  choiceId: Joi.string().trim().required(),
  choiceFieldId: Joi.string().trim().required(),
  minWidth: Joi.string().trim().optional().allow(""),
  maxWidth: Joi.string().trim().optional().allow(""),
  minHeight: Joi.string().trim().optional().allow(""),
  maxHeight: Joi.string().trim().optional().allow(""),
  maxUI: Joi.string().trim().optional().allow(""),
})

const preferedContactMechanism = Joi.object().keys({
  email: Joi.boolean().required(),
  call: Joi.boolean().required(),
  text: Joi.boolean().required(),
})

const orderCustomers = Joi.object().keys({
  isPrimary: Joi.boolean().optional().allow(""),
  customerFirstname: Joi.string().trim().optional().allow(""),
  customerLastname: Joi.string().trim().optional().allow(""),
  email: Joi.string().trim().email().optional().allow(""),
  primaryPhone: Joi.string().trim().optional().allow(""),
  secondaryPhone: Joi.string().trim().optional().allow(""),
  preferedContactMechanism: preferedContactMechanism
})

const workAddress = Joi.object().keys({
  streetName: Joi.string().trim().required(),
  streetNumber: Joi.string().trim().required(),
  city: Joi.string().trim().required(),
  state: Joi.string().trim().required(),
  zip: Joi.string().trim().required(),
})
const billingAddress = Joi.object().keys({
  streetName: Joi.string().trim().required(),
  streetNumber: Joi.string().trim().required(),
  city: Joi.string().trim().required(),
  state: Joi.string().trim().required(),
  zip: Joi.string().trim().required(),
  sameAsWorkAddress: Joi.boolean().required(),
})

const addresses = Joi.object().keys({
  workAddress: workAddress,
  billingAddress: billingAddress
})

const pricingDetails = Joi.object().keys({
  finalPrice: Joi.string().trim().required(),
  industryStandardAmount: Joi.string().trim().optional().allow(""),
  performanceAmount: Joi.string().trim().optional().allow(""),
  smartChoiceAmount: Joi.string().trim().optional().allow(""),
  premiumAmount: Joi.string().trim().optional().allow(""),
  optionPriceAmount: Joi.string().trim().optional().allow(""),
  additionalFeeAmount: Joi.string().trim().optional().allow(""),
  taxAmount: Joi.string().trim().optional().allow(""),
  discountAmount: Joi.string().trim().optional().allow(""),
  totalAmount: Joi.string().trim().optional().allow(""),
  monthlyEstimateEMIAmount: Joi.string().trim().optional().allow(""),
})

const paymentDetails = Joi.object().keys({
  cashDepositAmount: Joi.string().trim().optional().allow(""),
  creditCardDepositAmount: Joi.string().trim().optional().allow(""),
  checkDepositAmount: Joi.string().trim().optional().allow(""),
  financeAmount: Joi.string().trim().optional().allow(""),
  finalBalanceOnSubstantialCompletion: Joi.string().trim().optional().allow(""),
  paymentStatus: Joi.string().trim().optional().allow(""),
  paymentDate: Joi.string().trim().optional().allow(""),
  paymentMethod: Joi.string().trim().optional().allow(""),
  transactionId: Joi.string().trim().optional().allow(""),
});

const orderSummary = Joi.object().keys({
  pricingDetails: pricingDetails,
  paymentDetails: paymentDetails,
  contracts: Joi.array().required(),
  orderCustomisations: Joi.array().required(),
})

const fieldProductItem = Joi.object().keys({
  choiceId: Joi.number().required(),
  optionId: Joi.number().required(),
})


const validationSchema = {
  idValidation: {
    id: Joi.number().required(),
  },
  hover: {
    crmAppointmentId: Joi.string().trim().required(),
  },
  user: {
    info: {
      salesRepEmail: Joi.string().trim().required(),
    }
  },
  city: {
      zip: Joi.string().trim().required(),
  },
  sales: {
    list: {
      startDate: Joi.string().trim().required(),
      endDate: Joi.string().trim().required(),
    }
  },
  product: {
    add: {
      productName: Joi.string().trim().required(),
      //question: Joi.string().trim().required(),
      //options: Joi.array().required(),
      //phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
      //birthday: Joi.date().max('1-1-2004').iso()
    },
    status: {
      status: Joi.string().trim().required(),
      //question: Joi.string().trim().required(),
      //options: Joi.array().required(),
      //phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
      //birthday: Joi.date().max('1-1-2004').iso()
    },
    mapping: {
      catalogVersionId: Joi.string().trim().required(),
      productId: Joi.string().trim().required(),
      choiceIds: Joi.array().required(),
      //phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
      //birthday: Joi.date().max('1-1-2004').iso()
    },
  },

  cronJob: {
    add: {
      jobName: Joi.string().trim().required(),
      frequency: Joi.string().trim().required(),
      action: Joi.string().trim().required(),
    }
  },
  package: {
    add: {
      packageName: Joi.string().trim().required(),
      //question: Joi.string().trim().required(),
      //options: Joi.array().required(),
      //phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
      //birthday: Joi.date().max('1-1-2004').iso()
    },
    status: {
      status: Joi.string().trim().required(),
      //question: Joi.string().trim().required(),
      //options: Joi.array().required(),
      //phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
      //birthday: Joi.date().max('1-1-2004').iso()
    },
  },
  catalogVersion: {
    add: {
      description: Joi.string().trim().required(),
      effectiveDate: Joi.string().trim().required(),
      //question: Joi.string().trim().required(),
      //options: Joi.array().required(),
      //phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
      //birthday: Joi.date().max('1-1-2004').iso()
    },
    update: {
      description: Joi.string().trim().optional().allow(""),
      effectiveDate: Joi.string().trim().optional().allow(""),
      //question: Joi.string().trim().required(),
      //options: Joi.array().required(),
      //phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
      //birthday: Joi.date().max('1-1-2004').iso()
    },
    status: {
      status: Joi.string().trim().required(),
      //question: Joi.string().trim().required(),
      //options: Joi.array().required(),
      //phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
      //birthday: Joi.date().max('1-1-2004').iso()
    },
    approve: {
      isApproved: Joi.string().trim().required(),
    },
    forceUpdate: {
      forceUpdate: Joi.string().trim().required(),
    },
    activate: {
      catalogVersionId: Joi.string().trim().required(),
    },
    cross: {
      environment: Joi.string().trim().required(),
    },
    import: {
      catalogVersionId: Joi.string().trim().required(),
      // effectiveDate: Joi.string().trim().optional().allow(""),
      environment: Joi.string().trim().required(),
      description: Joi.string().trim().required(),
    },
  },
  packageInfo: {
    add: {
      packageId: Joi.string().trim().required(),
      packageAliasName: Joi.string().trim().required(),
      packageDesc: Joi.string().trim().optional().allow(""),
      //question: Joi.string().trim().required(),
      //options: Joi.array().required(),
      //phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
      //birthday: Joi.date().max('1-1-2004').iso()
    },
    status: {
      status: Joi.string().trim().required(),
      //question: Joi.string().trim().required(),
      //options: Joi.array().required(),
      //phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
      //birthday: Joi.date().max('1-1-2004').iso()
    },
  },
  
  regionPackage: {
    add: {
      regionId: Joi.string().trim().required(),
      address: Joi.string().trim().optional(),
      packages:  Joi.array().items(Joi.object().keys({
        packageInfoId: Joi.string().trim().required(),
        packageId: Joi.string().trim().required()
      })),
      //phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
      //birthday: Joi.date().max('1-1-2004').iso()
    },
    
    status: {
      status: Joi.string().trim().required(),
      //question: Joi.string().trim().required(),
      //options: Joi.array().required(),
      //phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
      //birthday: Joi.date().max('1-1-2004').iso()
    },
  },

  order: {
    add: {
      dbAppointmentId: Joi.string().trim().required(),
      orderType: Joi.string().trim().required().valid("sendquote", "sold"),
      homeType: Joi.string().trim().required(),
      historicDistrict: Joi.string().trim().required(),
      customers: Joi.array().items(orderCustomers),
      addresses: addresses,
      orderSummary : orderSummary,
      signingType: Joi.string().required().valid("offline", "online"),
      // crmAppointmentId: Joi.string().required(),
      orderExecutionDate: Joi.string().required(),
      division: Joi.string().required(),
      catalogVersion: Joi.string().required(),
      appVersion: Joi.string().required(),
      pricingVersion: Joi.string().required()
    },
    replayTask: {
      orderId : Joi.string().trim().required(),
      taskNames : Joi.array().required(),
    },
    downloadPriceBreakdown: {
      dbAppointmentId : Joi.string().required(),
      orderId : Joi.string().required(),
    }
  },
  question: {
    add: {
      productId: Joi.string().trim().required(),
      question: Joi.string().trim().required(),
      options: Joi.array().required(),
      //phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
      //birthday: Joi.date().max('1-1-2004').iso()
    },
  },
  specification: {
    add: {
      catalogVersionId: Joi.string().trim().required(),
      productId: Joi.string().trim().required(),
      //packageId: Joi.string().trim().required(),
      conditions: Joi.array().items(specificationsConditionItem),
      regions: Joi.array().required(),
      specifications: Joi.array().items(specificationItem),
      // choiceId: Joi.string().trim().required(),
      // choiceFieldId: Joi.string().trim().required(),
      // minWidth: Joi.string().trim().optional().allow(""),
      // maxWidth : Joi.string().trim().optional().allow(""),
      // minHeight : Joi.string().trim().optional().allow(""),
      // maxHeight : Joi.string().trim().optional().allow(""),
      // maxUI : Joi.string().trim().optional().allow(""),
      //specifications: Joi.array().items(specificationsAddItem),
      //specifications: Joi.array().required(),
      // choiceId: Joi.string().trim().required(),
      // minWidth: Joi.string().trim().required(),
      // maxWidth: Joi.string().trim().required(),
      // minHeight: Joi.string().trim().required(),
      // maxHeight: Joi.string().trim().required(),
      // maxUI: Joi.string().trim().required(),
      //phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
      //birthday: Joi.date().max('1-1-2004').iso()
    },
    update: {
      catalogVersionId: Joi.string().trim().required(),
      productId: Joi.string().trim().required(),
      //packageId: Joi.string().trim().required(),
      conditions: Joi.array().items(specificationsConditionItem),
      regions: Joi.array().required(),
      specifications: Joi.array().items(specificationItem),
      // choiceId: Joi.string().trim().required(),
      // choiceFieldId: Joi.string().trim().required(),
      // minWidth: Joi.string().trim().optional().allow(""),
      // maxWidth : Joi.string().trim().optional().allow(""),
      // minHeight : Joi.string().trim().optional().allow(""),
      // maxHeight : Joi.string().trim().optional().allow(""),
      // maxUI : Joi.string().trim().optional().allow(""),
      //specifications: Joi.array().items(specificationsUpdateItem),
      //specifications: Joi.array().required(),
      // choiceId: Joi.string().trim().required(),
      // minWidth: Joi.string().trim().required(),
      // maxWidth: Joi.string().trim().required(),
      // minHeight: Joi.string().trim().required(),
      // maxHeight: Joi.string().trim().required(),
      // maxUI: Joi.string().trim().required(),
      //phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
      //birthday: Joi.date().max('1-1-2004').iso()
    },
  },

  appointment: {
    addCRM: {
      salesRepEmail: Joi.string().trim().email().required(),
      userID: Joi.string().trim().required(),
      customerFirstName: Joi.string().trim().required(),
      customerLastName: Joi.string().trim().required(),
      email: Joi.string().trim().email().required(),
      primaryPhone: Joi.string().trim().required(),
      secondaryPhone: Joi.string().trim().optional().allow(""),
      streetName: Joi.string().trim().required(),
      streetNumber: Joi.string().trim().required(),
      city: Joi.string().trim().required(),
      startDate: Joi.string().trim().required(),
      timeSlot: Joi.string().trim().required(),
      state: Joi.string().trim().required(),
      zip: Joi.string().trim().required(),
      products: Joi.string().trim().required(),
      branch: Joi.string().trim().required(),
      notes: Joi.string().trim().optional().allow(""),
      //phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
      //birthday: Joi.date().max('1-1-2004').iso()
    },
    addCRMExisting: {
      salesRepEmail: Joi.string().trim().email().required(),
      userID: Joi.string().trim().required(),
      fromCRMAppointmentID: Joi.string().trim().required(),
      startDate: Joi.string().trim().required(),
      timeSlot: Joi.string().trim().required(),
      products: Joi.string().trim().required(),
      notes: Joi.string().trim().optional().allow(""),
    },

    add: {
      customerFirstname: Joi.string().trim().required(),
      customerLastname: Joi.string().trim().required(),
      email: Joi.string().trim().email().required(),
      primaryPhone: Joi.string().trim().required(),
      //secondaryPhone: Joi.string().trim().required(),
      streetName: Joi.string().trim().required(),
      streetNumber: Joi.string().trim().required(),
      division: Joi.string().trim().required(),
      homeType: Joi.string().trim().required(),
      condoApprovalRequired: Joi.string().trim().required(),
      state: Joi.string().trim().required(),
      zip: Joi.string().trim().required(),
      //phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
      //birthday: Joi.date().max('1-1-2004').iso()
    },
    update: {
      status: Joi.string().trim().optional().allow(""),
      result: Joi.string().trim().optional().allow(""),
    },
  },

  overview: {
    add: {
      appointmentId: Joi.number().required(),
      overviews: Joi.array().required(),
      //buildingType: Joi.string().trim().required(),
      //productName: Joi.string().trim().required(),
      //floors: Joi.string().trim().required(),
      //floorPics: Joi.array().required(),
      //city: Joi.string().trim().required(),
      //phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
      //birthday: Joi.date().max('1-1-2004').iso()
    },
    update: {
      buildingType: Joi.string().trim().required(),
      productName: Joi.string().trim().required(),
      floors: Joi.string().trim().required(),
      floorPics: Joi.array().required(),
      //city: Joi.string().trim().required(),
      //phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
      //birthday: Joi.date().max('1-1-2004').iso()
    },
  },

  configuration: {
    add: {
      appointmentId: Joi.number().required(),
      overviewId: Joi.number().required(),
      productConfigurationName: Joi.string().trim().required(),
      //productName: Joi.string().trim().required(),
      //floors: Joi.string().trim().required(),
      //floorPics: Joi.array().required(),
      //city: Joi.string().trim().required(),
      //phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
      //birthday: Joi.date().max('1-1-2004').iso()
    },
    update: {
      appointmentId: Joi.number().required(),
      overviewId: Joi.number().required(),
      productConfigurationName: Joi.string().trim().required(),
      //productName: Joi.string().trim().required(),
      //floors: Joi.string().trim().required(),
      //floorPics: Joi.array().required(),
      //city: Joi.string().trim().required(),
      //phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
      //birthday: Joi.date().max('1-1-2004').iso()
    },
  },
  basePrice: {
    change: {
      productId: Joi.string().trim().required(),
      percentage: Joi.string().trim().required(),
      action: Joi.string().trim().required(),
    },
  },
  optionPrice: {
    add: {
      choiceId: Joi.string().trim().required(),
      colorCode: Joi.string().trim().required(),
    },
    update: {
      colorName: Joi.string().trim().required(),
      colorCode: Joi.string().trim().required(),
    },
    change: {
      productId: Joi.string().trim().required(),
      percentage: Joi.string().trim().required(),
      action: Joi.string().trim().required(),
    },
  },

  colors: {
    add: {
      colorName: Joi.string().trim().required(),
      colorCode: Joi.string().trim().required(),
    },
    update: {
      colorName: Joi.string().trim().required(),
      colorCode: Joi.string().trim().required(),
    },
  },

  coupons: {
    add: {
      couponName: Joi.string().trim().required(),
      couponCode: Joi.string().trim().required(),
      couponDesc: Joi.string().trim().required(),
      couponType: Joi.string().trim().required(),
      couponValue: Joi.string().trim().required(),
      couponStartDate: Joi.date().required(),
      couponExpiryDate: Joi.date().required(),
    },
    update: {
      couponName: Joi.string().trim().required(),
      couponCode: Joi.string().trim().required(),
      couponDesc: Joi.string().trim().required(),
      couponType: Joi.string().trim().required(),
      couponValue: Joi.string().trim().required(),
      couponStartDate: Joi.date().required(),
      couponExpiryDate: Joi.date().required(),
    },
    status: {
      status: Joi.string().trim().required(),
    },
  },

  category: {
    add: {
      productId: Joi.string().trim().required(),
      categoryName: Joi.string().trim().required(),
    },
    update: {
      //productId: Joi.string().trim().required(),
      categoryName: Joi.string().trim().required()
    },
    status: {
      status: Joi.string().trim().required(),
    },
  },

  houseInspectionCategory: {
    add: {
      categoryName: Joi.string().trim().required(),
    },
    update: {
      categoryName: Joi.string().trim().required()
    },
    status: {
      status: Joi.string().trim().required(),
    },
  },

  toggalOptionPrice: {
    isDiscount: {
      isDiscount: Joi.number().required(),
    },
  },

  section: {
    add: {
      sectionName: Joi.string().trim().required(),
      catalogVersionId: Joi.string().trim().required(),
    },
    update: {
      //productId: Joi.string().trim().required(),
      sectionName: Joi.string().trim().required()
    },
    status: {
      status: Joi.string().trim().required(),
    },
  },

  tax: {
    add: {
      state: Joi.string().trim().required(),
      taxName: Joi.string().trim().required(),
      taxValue: Joi.string().trim().required(),
    },
    update: {
      state: Joi.string().trim().required(),
      taxName: Joi.string().trim().required(),
      taxValue: Joi.string().trim().required(),
    },
    status: {
      status: Joi.string().trim().required(),
    },
  },

  choices: {
    add: {
      choiceName: Joi.string().trim().required(),
      choiceType: Joi.string().trim().required(),
      catalogVersionId: Joi.string().trim().required(),
    },
    update: {
      choiceName: Joi.string().trim().required(),
      //choiceFieldType: Joi.string().trim().required(),
    },
    status: {
      status: Joi.string().trim().required(),
    },
    removeDuplicateImage: {
      catalogVersionId: Joi.string().trim().required(),
    },
  },

  choice: {
    add: {
      choiceFieldName: Joi.string().trim().required(),
      choiceFieldType: Joi.string().trim().required(),
    },
    update: {
      choiceFieldName: Joi.string().trim().required(),
      //choiceFieldType: Joi.string().trim().required(),
    },
    status: {
      status: Joi.string().trim().required(),
    },
  },

  field: {
    add: {
      productId: Joi.string().trim().required(),
      categoryId: Joi.string().trim().required(),
      fieldTitle: Joi.string().trim().required(),
      fieldType: Joi.string().trim().required(),
    },
    update: {
      productId: Joi.string().trim().required(),
      categoryId: Joi.string().trim().required(),
      fieldTitle: Joi.string().trim().required(),
      fieldType: Joi.string().trim().required(),
    },
    status: {
      status: Joi.string().trim().required(),
    },
    contract: {
      isContractField: Joi.string().trim().required(),
    },
    product: {
      isProduct: Joi.string().trim().required(),
    },
    common: {
      isCommon: Joi.string().trim().required(),
    },
    repeat: {
      isRepeat: Joi.string().required().valid("Yes", "No"),
    },
    mappingField: {
      mappingFieldId: Joi.number().optional().allow(null),
    },
    mapping: {
      mappingField1: Joi.string().trim().optional().allow(""),
      mappingField2: Joi.string().trim().optional().allow(""),
      mappingField3: Joi.string().trim().optional().allow(""),
      mappingField4: Joi.string().trim().optional().allow(""),
      mappingField5: Joi.string().trim().optional().allow(""),
    },
    productMapping: {
      catalogVersionId: Joi.number().required(),
      fieldId: Joi.number().required(),
      options: Joi.array().items(fieldProductItem),
    },
    autoFill: {
      productId: Joi.string().trim().required(),
      categoryId: Joi.string().trim().required(),
      autoFill: Joi.string().trim().optional().allow("")
    },
  },


  houseInspectionField: {
    add: {
      categoryId: Joi.string().trim().required(),
      fieldTitle: Joi.string().trim().required(),
      fieldType: Joi.string().trim().required(),
    },
    update: {
      categoryId: Joi.string().trim().required(),
      fieldTitle: Joi.string().trim().required(),
      fieldType: Joi.string().trim().required(),
    },
    status: {
      status: Joi.string().trim().required(),
    },
    autoFill: {
      categoryId: Joi.string().trim().required(),
      autoFill: Joi.string().trim().optional().allow("")
    },
  },

  additionaField: {
    add: {
      sectionId: Joi.string().trim().required(),
      fieldTitle: Joi.string().trim().required(),
      fieldType: Joi.string().trim().required(),
    },
    update: {
      sectionId: Joi.string().trim().required(),
      fieldTitle: Joi.string().trim().required(),
      fieldType: Joi.string().trim().required(),
    },
    status: {
      status: Joi.string().trim().required(),
    },

    autoFill: {
      sectionId: Joi.string().trim().required(),
      autoFill: Joi.string().trim().optional().allow("")
    },
  },

  windowType: {
    add: {
      typeName: Joi.string().trim().required(),
    },
    update: {
      typeName: Joi.string().trim().required()
    },
  },
  administrator: {
    add: {
      name: Joi.string().trim().required(),
      email:  Joi.string().trim().email().regex(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/).required(),
      password: Joi.string().trim().optional().allow(""),
      role: Joi.array().items(Joi.string().valid("admin", "superadmin", "product_and_pricing_approver","product_and_pricing_creator","read_only")).required(),

    },
    update: {
      name: Joi.string().trim().required(),
      email:  Joi.string().trim().email().regex(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/).required(),
      role: Joi.array().items(Joi.string().valid("admin", "superadmin", "product_and_pricing_approver","product_and_pricing_creator","read_only")).required()
    },
    setPassword: {
      oldPassword: Joi.string().trim().required().allow(""),
      newPassword: Joi.string().trim().required(),
      confirmPassword: Joi.string().trim().required().valid(Joi.ref('newPassword')),
    },
  },

  login: {
    email: Joi.string().trim().required(),
    password: Joi.string().trim().required(),
  },
  ssoLogin: {
    email: Joi.string().trim().required(),
  },
  addUser: {
    name: Joi.string().trim().required(),
    email: Joi.string().trim().email().required(),
    //phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
    //birthday: Joi.date().max('1-1-2004').iso()
  },
  signup: {
    userName: Joi.string().trim().required(),
    password: Joi.string().trim().required(),
    firstName: Joi.string().trim().required(),
    lastName: Joi.string().trim().required(),
    email: Joi.string().trim().email().required(),
    //phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
    //birthday: Joi.date().max('1-1-2004').iso()
  },
  verifyOTP: {
    email: Joi.string().trim().email().required(),
    OTP: Joi.string().trim().required(),
    //phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
    //birthday: Joi.date().max('1-1-2004').iso()
  },
  ResendOTP: {
    email: Joi.string().trim().email().required(),
    //phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
    //birthday: Joi.date().max('1-1-2004').iso()
  },

  version: {
    update: {
      type: Joi.string().trim().required(),
      version: Joi.string().trim().required()
    },
  },

  finance: {
    checkOffers: {
      appointmentID: Joi.string().trim().required()
    },
    createOffers: {
      appointmentID: Joi.number().required(),
      salesPersonEmail: Joi.string().trim().required(),
      applicant: {
        firstName: Joi.string().trim().required(),
        lastName: Joi.string().trim().required(),
        email: Joi.string().trim().required(),
        address: {
          line1: Joi.string().trim().required(),
          line2: Joi.string().trim().optional().allow(""),
          city: Joi.string().trim().required(),
          state: Joi.string().trim().required(),
          zip: Joi.string().trim().required()
        },
        socialSecurityNumber: Joi.string().trim().required(),
        dateOfBirth: Joi.string().trim().required(),
        grossIncome: Joi.number().required(),
        coApplicant: {
          firstName: Joi.string().trim().required(),
          lastName: Joi.string().trim().required(),
          address: {
            line1: Joi.string().trim().required(),
            line2: Joi.string().trim().optional().allow(""),
            city: Joi.string().trim().required(),
            state: Joi.string().trim().required(),
            zip: Joi.string().trim().required()
          },
          dateOfBirth: Joi.string().trim().required(),
          socialSecurityNumber: Joi.string().trim().required(),
          grossIncome: Joi.number().required(),
          email: Joi.string().trim().required()
        },
        originalRequestAmount: Joi.number().required(),
        requestAmount: Joi.number().required()
      }
    }
  },
  
  transaction: {
    subscriptionPlanId: Joi.string().trim().required(),
    transactionId: Joi.string().trim().required(),
    amount: Joi.string().trim().required(),
    developerPayload: Joi.object().required(),
  },
  favUnfav: {
    starId: Joi.string().trim().required(),
  },
  contact: {
    name: Joi.string().trim().required(),
    email: Joi.string().trim().email().required(),
    topic: Joi.string().trim().required(),
    comment: Joi.string().trim().required(),
  },
  blogLIST: {
    page: Joi.number().required(),
    pageSize: Joi.number().required(),
  },
  blogDETAIL: {
    id: Joi.number().min(1).required(),
  },
  key: {
    add: {
      catalogVersionId: Joi.string().required(),
      keyName: Joi.string().required(),
    },
    update: {
      //productId: Joi.string().required(),
      keyName: Joi.string().required()
    },
    status: {
      status: Joi.number().required(),
    },
  },

  commonPrice: {
    regions: Joi.string().optional(),
  },

  exportPriceBook: {
    catalogVersionId: Joi.string().trim().required(),
    region: Joi.string().trim().required(),
  },

  analytic: {
    add: {
      salesRepEmail: Joi.string().trim().required(),
      appVersion: Joi.string().trim().required(),
      crmAppointmentId: Joi.string().trim().optional().allow(""),
      fileName: Joi.string().trim().required(),
      fileType: Joi.string().trim().required(),
      viewDate: Joi.string().trim().required(),
      startTime: Joi.string().trim().required(),
      endTime: Joi.string().trim().required(),
      duration: Joi.string().trim().required(),
    }
  },

  financeBank: {
    add: {
      bankName: Joi.string().trim().required(),
    },
    status: {
      status: Joi.string().trim().required(),
    }
  },

  fetchFullAppointments: { 
    salesRepEmail: Joi.string().trim().email().required().messages({
      "any.required": "Sales representative email is required.",
      "string.empty": "Sales representative email cannot be empty.",
      "string.email": "Please provide a valid email address.",
    }),
    appVersion: Joi.string().trim().required().messages({
      'string.empty': 'App version is required and should not be empty.'
    }),
  },

};

//console.log(validationSchema.signup);
/*const signupSchema = Joi.object().keys({
  firstName: Joi.string().trim().required().label("is required, should not be empty."),
  lastName: Joi.string().trim().required().label("is required, should not be empty."),
  email: Joi.string().trim().email().required(),
  phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
  birthday: Joi.date().max('1-1-2004').iso()
});*/

/*
validation.apply = function (res, requestBody, requiredSchema) {
  var schema = Joi.object().keys(validationSchema[requiredSchema]);
  var validate = schema.validate(requestBody);
  if (validate.error) {
    //console.log(JSON.stringify(validate.error.details)); return false;
    //console.log(validate.error.details[0].context)
    //let msg = `In record , field ${validate.error.details[0].path[0]} ${validate.error.details[0].context.label}`
    //return res.status(422).json({
    //	error: msg,
    //});
    var result = { errors: validate.error.details };
    return Helper.response(res, 400, "Parameter missing.", result)
  }
};*/

module.exports = validationSchema;
