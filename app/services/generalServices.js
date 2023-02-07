import {HTTP_CLIENT} from "../Utils/config";
import {BASE_URL, ENDPOINTS} from "../Utils/endpoints";

const getVehicles = () => {
    return HTTP_CLIENT.get(ENDPOINTS.VEHICLE_TYPE);
};

export {getVehicles};
