import React from "react";
import { Button } from "./ui/button";
import {ReactComponent as AndroidLogo} from "../icons/android.svg";
import {ReactComponent as WindowsLogo} from "../icons/windows.svg";
import {ReactComponent as macOSLogo} from "../icons/apple.svg";
import {ReactComponent as UbuntuLogo} from "../icons/ubuntu.svg";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown";

const DownloadBar = (
    {
        osName,
        linkMain,
    }
) => {
    
    return (
        <a href={linkMain} className="font-semibold text-white">
                <Button className="w-40 text-md font-semibold">
                    {
                        osName === "Android" &&
                        <AndroidLogo
                            className="w-4 h-4 mr-1"
                        />
                    }
                    {osName}
                </Button>
        </a>
    )
};

export default DownloadBar;