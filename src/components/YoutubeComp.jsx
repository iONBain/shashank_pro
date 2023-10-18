import React from "react";

const YoutubeComp = () => {
  const arrVideos = [
    {
      title:
        "हवा मैं हुआ flight का Engine खराब 😵‍💫 | India to Thailand 🥹 *exposed",
      src: "https://www.youtube.com/embed/bcTu1C9nduE",
    },
    {
      title:
        "वाढदिवसाला मिळाला “महा आरती” चा सन्मान 🙌🏻 #amravati चा राजा #ganesh #marathivlog #pune",
      src: "https://www.youtube.com/embed/92kJb89TSjQ",
    },
    {
      title:
        "हवा मैं हुआ flight का Engine खराब 😵‍💫 | India to Thailand 🥹 *exposed",
      src: "https://www.youtube.com/embed/bcTu1C9nduE",
    },
  ];
  return (
    <React.Fragment>
      <h2 className="text-center p-20">Portfolio</h2>
      <section class="flex-row width-80 sp-bw m-auto flex-wrap">
        {arrVideos.map(({ title, src }) => (
          <iframe
            // min-width="22%"
            src={src}
            title={title}
            frameborder="0"
            className="p-20"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        ))}
      </section>
    </React.Fragment>
  );
};

export default YoutubeComp;
