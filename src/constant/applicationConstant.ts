export const ApplicationConstant = {
  REFRESH_TOKEN: "refreshKey",

  // main routes
  LOGIN_PATH: "/login",
  REGISTER_PATH: "/register",
  DASHBOARD_PATH: "/dashboard",
  PROFILE_PATH: "/dashboard/profile",
  UNIVERSITY_PATH: "/dashboard/university",
  PENDING_STUDENT_PATH: "/dashboard/pending-student",
  VERIFIED_STUDENT_PATH: "/dashboard/verified-student",
  NEW_COMPANY_PATH: "/dashboard/company/new",
};

export const ApiConstant = {
  BASE_URL: "http://127.0.0.1:8000/",

  // account url
  POST_NEW_USER: "account/user/post/",
  UPDATE_NEW_USER: "account/user/update/",
  AUTHENTICATE_USER: "account/user/token/",
  GET_NEW_ACCESS_TOKEN: "account/user/token/refresh/",

  // student url
  GET_STUDENT_PROFILE: "student/profile/",

  // faculty url
  GET_FACULTY_PROFILE: "faculty/profile/",

  // company url
  GET_COMPANY_DETAIL: "company/profile/",
  ADD_COMPANY_DETAIL: "company/create/",
  ADD_COMPANY_DOCUMENT_DETAIL: "company/document/create/",

  // placement url
  POST_APPLICATION: "placement/apply/",

  // university url
  COLLEGE_TYPE: "university/college/",
  BRANCH_TYPE: "university/branch/",
};
