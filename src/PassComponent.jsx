function PassComp({ displayName, name = "peter", getUser }) {
  // const name = 'peter';

  return (
    <div>
      <button onClick={() => displayName(name)}>Display Name</button>
      <button onClick={() => getUser()}>Get User</button>
    </div>
  );
}

export default PassComp;