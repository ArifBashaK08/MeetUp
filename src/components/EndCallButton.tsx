"use client"

import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import classNames from "classnames"

const EndCallButton = () => {

    const call = useCall()
    const { useLocalParticipant } = useCallStateHooks()
    const localParticipant = useLocalParticipant()
    const router = useRouter()
    
    const isMeetingOwner = localParticipant && call?.state.createdBy && localParticipant.userId === call?.state.createdBy.id

    if (!isMeetingOwner) return null;

    return (
        <Button onClick={async () => {
            await call.endCall()
            router.push("/")
        }}
            className="bg-red-500"
        >
            End call for Everyone
        </Button>
    )
}
export default EndCallButton