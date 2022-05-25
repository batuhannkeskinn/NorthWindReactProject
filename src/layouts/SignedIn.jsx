import React from 'react'
import { Dropdown, Menu , Image } from 'semantic-ui-react'

export default function SignedIn({singOut}) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src = "https://twitter.com/BatuKsknn/photo"/> 
            <Dropdown pointing = 'top right' text = "Batu">
                <Dropdown.Menu>
                <Dropdown.Item text = "Bilgilerim" icon = "info"/>
                <Dropdown.Item onClick={singOut} text = "Çıkış Yap"   icon = "sign-out"/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}
