"use client";
import supabase from "../../../util/supabase/index.client";
import { signOut } from "../../actions/index";
import { SessionContext } from "../../context/SessionContext.client";
import { useRouter } from "next/navigation";
import { useState, useContext, useEffect } from "react";
import { hasUsername } from "../../actions/index";
import Modal from "../components/Modal/index.client";
const Home = () => {
  const [signOutError, setSignOutError] = useState<null | string>(null);
  const [displayModal, setDisplayModal] = useState(false);

  const toggleModal = () => {
    setDisplayModal(!displayModal);
  };
  const { session, setSession } = useContext(SessionContext);
  const router = useRouter();
  useEffect(() => {
    console.log("session: ", session);
    if (session === null) {
      router.replace("/authflow/login");
    } else if (session === "Error") {
      router.replace("/authflow/login");
    } else {
      (async () => {
        if (session.user.email !== undefined) {
          console.log("email:", session.user.email);
          const userIsNull = await hasUsername(session.user.email);
          console.log(userIsNull);
        }
      })();
    }
  }, [session]);
  return (
    <div className="flex flex-col space-y-4 w-screen h-screen relative">
      Home Page
      {signOutError && <p>{signOutError}</p>}
      <button
        onClick={async () => {
          try {
            await signOut();
            setSession((prevState) => {
              return {
                ...prevState,
                session: null,
              };
            });
            router.replace("/login");
          } catch (error) {
            setSignOutError(
              "There was an error signing out. Please try again."
            );
          }
        }}
      >
        Sign Out
      </button>
      <Modal onClose={toggleModal} isOpen={displayModal}>
        Hello
      </Modal>
    </div>
  );
};

export default Home;
