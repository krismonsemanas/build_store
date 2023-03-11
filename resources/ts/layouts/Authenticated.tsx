import CardBoxModal from "@/components/CardBoxModal";
import SectionMain from "@/components/SectionMain";
import { hideLogoutModal } from "@/stores/logoutSlice";
import { router, usePage, Head } from "@inertiajs/react";
import { mdiBackburger, mdiForwardburger, mdiMenu } from "@mdi/js";
import { ReactNode, useEffect, useState } from "react";
import AsideMenu from "../components/AsideMenu";
import BaseIcon from "../components/BaseIcon";
import FooterBar from "../components/FooterBar";
import NavBar from "../components/NavBar";
import NavBarItemPlain from "../components/NavBarItemPlain";
import menuAside from "../menuAside";
import menuNavBar from "../menuNavBar";
import { useAppDispatch, useAppSelector } from "../stores/hooks";
import { setUser } from "../stores/mainSlice";

type Props = {
  children: ReactNode;
};

export default function LayoutAuthenticated({ children }: Props) {
  const { title } = usePage().props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setUser({
        name: "John Doe",
        email: "john@example.com",
        avatar:
          "https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&options[accessoriesChance]=93",
      })
    );
  });

  const darkMode = useAppSelector((state) => state.style.darkMode);
  const { isOpen } = useAppSelector((state) => state.logout);

  const [isAsideMobileExpanded, setIsAsideMobileExpanded] = useState(false);
  const [isAsideLgActive, setIsAsideLgActive] = useState(false);

  const handleLogout = () => {
    dispatch(hideLogoutModal());
    router.post(route("logout"));
  };

  const layoutAsidePadding = "xl:pl-60";

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } overflow-hidden lg:overflow-visible`}
    >
      {/* Document Head */}
      <Head title={title as string} />
      <div
        className={`${layoutAsidePadding} ${
          isAsideMobileExpanded ? "ml-60 lg:ml-0" : ""
        } pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100`}
      >
        <NavBar
          menu={menuNavBar}
          className={`${layoutAsidePadding} ${
            isAsideMobileExpanded ? "ml-60 lg:ml-0" : ""
          }`}
        >
          <NavBarItemPlain
            display="flex lg:hidden"
            onClick={() => setIsAsideMobileExpanded(!isAsideMobileExpanded)}
          >
            <BaseIcon
              path={isAsideMobileExpanded ? mdiBackburger : mdiForwardburger}
              size="24"
            />
          </NavBarItemPlain>
          <NavBarItemPlain
            display="hidden lg:flex xl:hidden"
            onClick={() => setIsAsideLgActive(true)}
          >
            <BaseIcon path={mdiMenu} size="24" />
          </NavBarItemPlain>
          {/* <NavBarItemPlain useMargin>
            <Formik
              initialValues={{
                search: '',
              }}
              onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
            >
              <Form>
                <FormField isBorderless isTransparent>
                  <Field name="search" placeholder="Search" />
                </FormField>
              </Form>
            </Formik>
          </NavBarItemPlain> */}
        </NavBar>
        <AsideMenu
          isAsideMobileExpanded={isAsideMobileExpanded}
          isAsideLgActive={isAsideLgActive}
          menu={menuAside}
          onAsideLgClose={() => setIsAsideLgActive(false)}
        />
        <SectionMain>{children}</SectionMain>
        <FooterBar>
          Get more with{` `}
          <a
            href="https://tailwind-react.justboil.me/dashboard"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600"
          >
            Premium version
          </a>
        </FooterBar>
      </div>
      {/* Logout Modal */}
      <CardBoxModal
        isActive={isOpen}
        onCancel={() => dispatch(hideLogoutModal())}
        title="Perhatian"
        buttonColor="info"
        buttonLabel="Ya"
        onConfirm={() => handleLogout()}
        clickAbleBackdrop={false}
      >
        <p className="text-sm colo">Apakah anda yakin ingin logout?</p>
      </CardBoxModal>
    </div>
  );
}
