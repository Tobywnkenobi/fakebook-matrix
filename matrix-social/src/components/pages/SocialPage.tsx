import { useContext } from 'react';
import Body from '../components/Body';
import { UserContext } from '../contexts/UserProvider';

export default function SocialPage({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const { user } = useContext(UserContext);

  return (
    <Body sidebar>
      <>{user.username && <h3>{user.username}</h3>}</>

      {children}
    </Body>
  );
}
