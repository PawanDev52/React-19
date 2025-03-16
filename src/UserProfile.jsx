import style from "./css/UserProfile.module.css";

function UserProfile() {
  return (
    <div>
      <div className={style.card}>
        <img
          className={style.img}
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt=""
        />
        <div>
          <h4>Peter Parker</h4>
          <p>Software Developer</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
