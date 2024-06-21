module.exports = {
  packagerConfig: {
    asar: true,
    icon: "/Users/macbookpro/G-message/assets/icons/", // no file extension required
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {},
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
    {
      name: "@electron-forge/maker-deb",
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
    {
      name: "@electron-forge/maker-dmg",
      config: {
        format: "ULFO",
        icon: "/Users/macbookpro/G-message/assets/icons/Google_Messages_logo_2022.icns",
        name: "G-message",
      },
    },
  ],
  plugins: [
    {
      name: "@electron-forge/plugin-auto-unpack-natives",
      config: {},
    },
  ],
};
