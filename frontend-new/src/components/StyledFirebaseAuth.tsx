import { useEffect, useRef, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import "firebaseui/dist/firebaseui.css";
import { auth } from "firebaseui";

import { auth as auth1 } from "firebaseui";

interface Props {
  // The Firebase UI Web UI Config object.
  // See: https://github.com/firebase/firebaseui-web#configuration
  uiConfig: auth.Config;
  // Callback that will be passed the FirebaseUi instance before it is
  // started. This allows access to certain configuration options such as
  // disableAutoSignIn().
  uiCallback?(ui: auth.AuthUI): void;

  // The Firebase App auth instance to use.
  firebaseAuth: any; // As firebaseui-web
  className?: string;
}

const StyledFirebaseAuth = ({
  uiConfig,
  firebaseAuth,
  className,
  uiCallback,
}: Props) => {
  const [userSignedIn, setUserSignedIn] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Firebase UI only works on the Client. So we're loading the package only after
    // the component has mounted, so that this works when doing server-side rendering.
  }, []);

  useEffect(() => {
    // Get or Create a firebaseUI instance.
    const firebaseUiWidget =
      auth1.AuthUI.getInstance() || new auth1.AuthUI(firebaseAuth);
    if (uiConfig.signInFlow === "popup") firebaseUiWidget.reset();

    // We track the auth state to reset firebaseUi if the user signs out.
    const unregisterAuthObserver = onAuthStateChanged(firebaseAuth, (user) => {
      if (!user && userSignedIn) firebaseUiWidget.reset();
      setUserSignedIn(!!user);
    });

    // Trigger the callback if any was set.
    if (uiCallback) uiCallback(firebaseUiWidget);

    // Render the firebaseUi Widget.
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    firebaseUiWidget.start(elementRef.current, uiConfig);

    return () => {
      unregisterAuthObserver();
      firebaseUiWidget.reset();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uiConfig]);

  return <div className={className} ref={elementRef} />;
};

export default StyledFirebaseAuth;
