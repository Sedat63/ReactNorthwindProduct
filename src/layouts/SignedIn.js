import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src="ben.jpg" />
            <Dropdown pointing="top right" text='Sedat'>
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info" />

                    <Dropdown.Item onClick={signOut} text="ÇIkIş Yap" icon="sign-out" />


                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}
