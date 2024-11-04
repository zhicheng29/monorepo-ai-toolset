import { getAuthApi } from "@/api/modules/auth";
import { useAppDispatch } from "@/redux";
import { setAuthMenuList } from "@/redux/modules/auth";
import { setToken } from "@/redux/modules/user";

const usePermission = () => {
  const dispatch = useAppDispatch();

  const initPermission = async (token: string) => {
    if (token) {
      try {
        const { data: authData } = await getAuthApi();
        dispatch(setAuthMenuList(authData.authMenuList));
        if (!authData.authMenuList.length) {
          dispatch(setToken(""));
          // todo 通知
          console.log("无菜单权限");
        }
      } catch (error) {
        dispatch(setToken(""));
        return Promise.reject(error);
      }
    }
  };
  return { initPermission };
};

export default usePermission;
