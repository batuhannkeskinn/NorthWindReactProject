import React from 'react';
import { Button, Menu } from 'semantic-ui-react';


export default function SignedOut({singIn}) {
    return (
        <div>
            <Menu.Item>
            <Button primary onClick={singIn} >
                Giriş Yap
            </Button>
            <Button primary style = {{marginLeft:"1em"}}>
                Kayıt Ol
            </Button>
            </Menu.Item>
        </div>
    );
}


