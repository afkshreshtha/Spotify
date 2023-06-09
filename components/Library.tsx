import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import * as Tooltip from "@radix-ui/react-tooltip";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";
import { Song } from "@/types";
import MediaItem from "./MediaItem";
import useOnPlay from "@/hooks/useOnPlay";

interface LibrayProps {
  songs: Song[];
}

const Library: React.FC<LibrayProps> = ({ songs }) => {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const { user } = useUser();
  const onPlay = useOnPlay(songs)
  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }
    return uploadModal.onOpen();
  };
  return (
    <>
      <Tooltip.Provider>
        <div className="flex flex-col">
          <div className="flex items-center justify-between mt-4 px-5">
            <div className=" inline-flex items-center gap-x-2">
              <TbPlaylist size={26} className="text-neutral-400" />
              <p className="text-neutral-400 font-medium text-md">
                Your Library
              </p>
            </div>
            <Tooltip.Root>
              <Tooltip.Trigger>
                <AiOutlinePlus
                  onClick={onClick}
                  size={20}
                  className="text-neutral-400 cursor-pointer hover:text-white transition"
                />
                <Tooltip.Portal>
                  <Tooltip.Content className="TooltipContent" sideOffset={5}>
                    <h1 className="bg-white text-black rounded-md opacity-20 font-bold">
                      Add to library
                    </h1>
                    <Tooltip.Arrow className="TooltipArrow" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Trigger>
            </Tooltip.Root>
          </div>
          <div className="flex flex-col gap-y-2 mt-4 px-3">
            {songs.map((item) => (
              <MediaItem  data={item} onClick={(id:string)=>{onPlay(id)}} key={item.id} />
            ))}
          </div>
        </div>
      </Tooltip.Provider>
    </>
  );
};

export default Library;
