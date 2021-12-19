import React from "react";
import { Button } from "react-bootstrap";
import {Login, useWalletModal} from "../uikit/widgets/WalletModal";

// interface Props {
//   account?: string;
//   login: Login;
//   logout: () => void;
// }

const userBlock = (account, login, logout ) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountElipsis= account?`${account.substring(0,4)}...${account.substring(account.length - 4)}`: null
  return(
    <div>
      {account?(
        <Button
          scale='sm'
          mr='10px'
          variant='tertiary'
          onClick={()=>{
            onPresentAccountModal();
          }}
        >
          {accountElipsis}
        </Button>
      ):(
        <Button
          scale='sm'
          mr='10px'
          onClick={()=>{
            onPresentConnectModal();
          }}
          // disabled
          // variant='disabled'
        >
          Connect
        </Button>
      )}
    </div>
  )
}

export default React.memo(
  userBlock,
  (prevProps, nextProps) =>
    prevProps.account === nextProps.account &&
      prevProps.login === nextProps.login &&
        prevProps.logout === nextProps.logout
)