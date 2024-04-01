import { AppState, Auth0Provider, User } from "@auth0/auth0-react";

type props = {
    children:React.ReactNode;
}

const Auth0ProviderWithNavigate = ({children}: props) => {
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta. env. VITE_AUTHO_CLIENT_ID;
    const redirectUri = import.meta.env. VITE_AUTHO_CALLBACK_URL;

    if (!domain || !clientId || !redirectUri)
    {
        throw new Error("unable to initialise auth");
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const onRedirectCallback = (_appState?: AppState,user?:User) =>{
    console.log("USER",user);
    }
    return(
        <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
            redirect_uri:redirectUri,
        }}
        onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );

}

export default Auth0ProviderWithNavigate

