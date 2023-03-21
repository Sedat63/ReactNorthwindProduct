import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOut({signIn}) {
  return (
    <div>
      <Menu.Item>
        <Button onClick={signIn} inverted color='green'>Giriş Yap </Button>
        <Button inverted color='blue' style={{marginLeft:'1em'}}>Kayıt Ol</Button>
      </Menu.Item>
    </div>
  );
}
