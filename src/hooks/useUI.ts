import { useAppDispatch, useAppSelector } from ".";
import { selectUIState } from "../store/selectors";
import { TOGGLE_OPEN_MENU } from "../store/ui";


const useUI = () => {
  const { openMenu } = useAppSelector(selectUIState);
  const dispatch = useAppDispatch();


  const toggleOpenMenu = () => {
    dispatch(TOGGLE_OPEN_MENU());
  };

  return {
    openMenu,
    toggleOpenMenu,
  };
};

export default useUI;