type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  //mail: "rishabkumar7@gmail.com",
  title: "Elevate Your Customer Experience",
  //profile: "/profile.webp",
  description:
    "Unlock unparallel support services that cater to your every need. Let us redefine how you connect with your clients.",
  socials: [
    //{
      //label: "YouTube",
      //link: "https://youtube.com/@rishabincloud",
    //},
    //{
     // label: "X",
      //link: "https://twitter.com/rishabincloud",
    //},
    //{
      //label: "LinkedIn",
      //link: "https://linkedin.com/in/rishabkumar7",
    //},
    //{
      //label: "GitHub",
      //link: "https://github.com/rishabkumar7",
    //},
    //{
      //label: "Bento",
      //link: "https://bento.me/rishabincloud",
    //},
  ],
};

export default presentation;
