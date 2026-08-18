function Profile(props) {
  return (
    <section>
      <h2>Hello, I'm {props.name}</h2>
      <p>{props.about}</p>
    </section>
  );
}

export default Profile;