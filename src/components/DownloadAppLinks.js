const DownloadAppLinks = () => {
  return (
    <div className="flex w-full flex-col items-center gap-3 border-[1px] border-instGrayish pt-2 pb-3">
      <h1> Get the app. </h1>
      <div className="flex w-full justify-center gap-2">
        <a
          href="https://l.instagram.com/?u=https%3A%2F%2Fitunes.apple.com%2Fapp%2Finstagram%2Fid389801252%3Fpt%3D428156%26ct%3Digweb.loginPage.badge%26mt%3D8%26vt%3Dlo&e=AT0wQ-11T97j2VQEl_HyW8qG3MZO1CAFPtC8ZU-SMhMjSyAqb-g1ZVDyAMWMYkoLJ_jAR-Bso3-uz1HFqa8ouJDFTLEp1yOi&s=1"
          target="_blank"
          className="h-full w-[38%] cursor-pointer active:opacity-50"
        >
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2FHomeImg%2FdlAppStore.png?alt=media&token=f9bd4ba2-68cb-4244-ab6b-0d8cc223e085"
            }
            className="h-full w-full"
          />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D5095EEDE-9F82-4454-9405-9AEF16A8820C%26utm_content%3Dlo%26utm_medium%3Dbadge"
          target="_blank"
          className="h-full w-[38%] cursor-pointer active:opacity-50"
        >
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2FHomeImg%2FdlGooglePlay.png?alt=media&token=a8db9dce-b28f-40f6-a763-9e389e7cb146"
            }
            className="h-full w-full"
          />
        </a>
      </div>
    </div>
  );
};

export default DownloadAppLinks;
