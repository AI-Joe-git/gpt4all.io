import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";


const InstallInstructions = () => {

  const hide = useState(true);
  return (
    <Tabs
    defaultValue="windows" className="w-full"
    >
      <TabsList className="grid grid-cols-4 w-full sm:w-[400px] mx-auto mb-8">
        <TabsTrigger value="android">Android</TabsTrigger>
        <TabsTrigger value="windows">Windows</TabsTrigger>
        <TabsTrigger value="macos">MacOS</TabsTrigger>
        <TabsTrigger value="ubuntu">Ubuntu</TabsTrigger>
      </TabsList>

      <TabsContent value="android">
        <div className="mx-auto w-full xl:w-[900px] rounded-md bg-slate-50/50 p-6 flex flex-col">
          <h2 className="text-xl font-semibold">
            Android Installer
          </h2>
          <p>
          Download the APK file to your Android device. Open the Files app and locate the APK file you downloaded.
          Long press on the APK file and select "Install" from the options. Confirm installation by tapping "Install" in the popup prompt.
          The app will then download and install.
          </p>
          <p>NOTE: Once complete, you can find and launch the newly installed app like any other on your Android device.</p>
        </div>
      </TabsContent>
      <TabsContent value="windows">
        <div className="mx-auto w-full xl:w-[900px] rounded-md bg-slate-50/50 p-6 flex flex-col">
          <h2 className="text-xl font-semibold">
            Windows Installer
          </h2>
          <p>
            After download and installation you should be able to find the application in the directory you specified in the installer.
            You will find a desktop icon for Open AI-Pro after installation.
          </p>
          <p>NOTE: On Windows, the installer might show a security complaint. This is being addressed as we're actively setting up cert sign for Windows.</p>
        </div>
      </TabsContent>
      <TabsContent value="macos">
        <div className="mx-auto w-full xl:w-[900px] rounded-md bg-slate-50/50 p-6 flex flex-col">
          <h2 className="text-xl font-semibold">
            MacOS Installer
          </h2>
          <p>
            After download and installation you should be able to find the application in the directory you specified in the installer.
            On macOS if you chose the default install location you'll find the application in the shared /Applications folder.
          </p>
          <p>
            NOTE: You will be need to be on the latest version of macOS.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="ubuntu">
        <div className="mx-auto w-full xl:w-[900px] rounded-md bg-slate-50/50 p-6 flex flex-col">
          <h2 className="text-xl font-semibold">
            Ubuntu Installer
          </h2>
          <p>
            After download and installation you should be able to find the application in the directory you specified in the installer.

          </p>
          <p>
            NOTE: You may need to build from source if you are not working off of the latest version of Ubuntu.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  )
}

export default InstallInstructions;