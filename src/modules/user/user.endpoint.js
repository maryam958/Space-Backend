import { roles } from "../../middleware/auth.js";
import { searchUser } from "./controller/user.controller.js";

export const endPoints={

    addWsByFillForm:[roles.User] ,
    adminValidation:[roles.Admin],
    updateWorkspaceInfo:[roles.Owner],
    deleteWorkspaceInfo:[roles.Owner],
    getReportsToOwner:[roles.Owner],

    getClientAccount:[roles.Admin],
    deleteClientAccount:[roles.Admin],
    getWorkSpace:[roles.Admin],
    deleteWorkSpace:[roles.Admin],
    getWsRequests:[roles.Admin],
    

    profilePic:[roles.Admin,roles.User,roles.Owner],
  
    updateProfile:[roles.User,roles.Owner,roles.Owner],
    
   
    UserReportWs:[roles.User],

    searchUser:[roles.Admin]



}