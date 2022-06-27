import { useSelector } from "react-redux";
import { useResponsive } from "../../../hooks/useResponsive";
import { getIsLoggedIn } from "../../../store/users";
import MainContainer from "../../stylesComp/mainContainer";
import BackDrop from "../backDrop";
import {
  SCloseIcon,
  SHomeIcon,
  SIconCloseContainer,
  SIconContainer,
  SLink,
  SListItem,
  SMain,
  SPlusCircleIcon,
  SSidebar,
  SSignInIcon,
  SSignOutIcon,
  STextLink,
  SUserPlusIcon,
} from "./sidebar.style";

const variants = {
  openMobile: {
    opacity: 1,
    x: 0,
    width: "300px",
  },
  closeMobile: {
    opacity: 0,
    x: "-100%",
  },
  openDeckstop: {
    opacity: 1,
    x: 0,
    width: "300px",
  },
  closeDeckstop: {
    opacity: 1,
    x: 0,
    width: "100px",
  },
};

type SidebarProps = {
  children: JSX.Element | JSX.Element[];
  isOpen: boolean;
  onToggleSidebar: () => void;
};
export function Sidebar({ children, isOpen, onToggleSidebar }: SidebarProps) {
  const isAuth = useSelector(getIsLoggedIn());
  const isMobile = useResponsive(992);

  return (
    <MainContainer isOpen={isOpen} isMobile={isMobile}>
      <SSidebar
        animate={
          isMobile && isOpen
            ? "openMobile"
            : isMobile && !isOpen
            ? "closeMobile"
            : !isMobile && isOpen
            ? "openDeckstop"
            : "closeDeckstop"
        }
        variants={variants}
        initial={false}
        transition={{ duration: 0.3 }}
      >
        {isOpen && isMobile && (
          <SIconCloseContainer>
            <SCloseIcon onClick={onToggleSidebar} />
          </SIconCloseContainer>
        )}

        <ul>
          <SListItem {...(isMobile && { onClick: onToggleSidebar })}>
            <SLink to="/">
              <SIconContainer>
                <SHomeIcon />
              </SIconContainer>
              <STextLink>Мои тесты</STextLink>
            </SLink>
          </SListItem>
          {isAuth && (
            <SListItem {...(isMobile && { onClick: onToggleSidebar })}>
              <SLink to="/tests/create">
                <SIconContainer>
                  <SPlusCircleIcon />
                </SIconContainer>
                <STextLink>Создать тест</STextLink>
              </SLink>
            </SListItem>
          )}
        </ul>
        <ul>
          {isAuth ? (
            <SListItem {...(isMobile && { onClick: onToggleSidebar })}>
              <SLink to="/logout">
                <SIconContainer>
                  <SSignOutIcon />
                </SIconContainer>
                <STextLink>Выйти</STextLink>
              </SLink>
            </SListItem>
          ) : (
            <>
              <SListItem {...(isMobile && { onClick: onToggleSidebar })}>
                <SLink to="/login">
                  <SIconContainer>
                    <SSignInIcon />
                  </SIconContainer>
                  <STextLink>Вход</STextLink>
                </SLink>
              </SListItem>
              <SListItem {...(isMobile && { onClick: onToggleSidebar })}>
                <SLink to="/register">
                  <SIconContainer>
                    <SUserPlusIcon />
                  </SIconContainer>
                  <STextLink>Регистрация</STextLink>
                </SLink>
              </SListItem>
            </>
          )}
        </ul>
      </SSidebar>
      <BackDrop isOpen={isOpen && isMobile} onToggleSidebar={onToggleSidebar} />
      <SMain>{children}</SMain>
    </MainContainer>
  );
}
