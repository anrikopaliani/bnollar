import React from "react";

import Header from "../Header/Header";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import ProfilePicture from "../ProfilePicture/ProfilePicture";

const ProfilePage = () => {
  return (
    <div>
      <Header />
      <ProfilePicture />
      <ProfileInfo />
    </div>
  );
};

export default ProfilePage;
