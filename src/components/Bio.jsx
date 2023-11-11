import React from "react";

const Bio = ({ comp }) => {
  return (
    <React.Fragment>
      <h2 className="text-center p-20">Bio</h2>
      <div className="flex-row gap-10  width-80 m-auto sp-bw flex-wrap">
        <img
          src="/imgGal/ShankBox-Bio.png"
          className="bor-rad-5 imgBio flex1"
          alt="img - hero"
        />
        <div className="bor-2 flex-col sp-bw bor-rad-5 flex1">
          <p className="p-20 text-justify">
            Welcome to the vibrant world of <b> Shashank Udakhe </b>, your go-to
            entertainer and video creator extraordinaire! With an infectious
            energy that lights up screens, Shashank is a multifaceted influencer
            reigning over the realms of Instagram and YouTube. Boasting a
            colossal following of over <b>240K+ on Instagram </b> , he's a magnet for
            those seeking an absolute entertainment carnival.
          </p>
      
          <p className="p-20 text-justify">
            Expect the unexpected in his world. Shashank's creativity knows no
            bounds, offering a diverse palette of entertainment—comedy,
            storytelling, music, and more. He's not just a content creator; he's
            a maestro in crafting experiences that resonate deeply with his
            audience.
          </p>
          <p className="p-20 text-justify">
            Through his Insta and YouTube platforms, Shashank invites you to
            explore a fusion of laughter, emotions, and a touch of the
            unexpected. Join the community and witness the magic of an
            entertainer who's all about breaking the monotony and keeping the
            excitement alive!
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Bio;
