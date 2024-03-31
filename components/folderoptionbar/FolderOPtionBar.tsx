"use client";
import { FOLDER_OPTION_INFORMATION } from "@/constant";
import * as S from "./FolderOptionBar.style";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface OptionBarProps {
  currentFolder: string;
}

const FolderOptionBar: React.FC<OptionBarProps> = ({ currentFolder }) => {
  const router = useRouter();
  return (
    <S.OptionBox>
      <S.FolderName>{currentFolder}</S.FolderName>
      <S.Options>
        {FOLDER_OPTION_INFORMATION.map((option) => (
          <S.OptionButton
            key={option.id}
            onClick={() => router.push(option.url)}
          >
            <Image
              src={option.iconsrc}
              width={18}
              height={18}
              alt={`${option.name} 아이콘`}
            />
            {option.name}
          </S.OptionButton>
        ))}
      </S.Options>
    </S.OptionBox>
  );
};

export default FolderOptionBar;
