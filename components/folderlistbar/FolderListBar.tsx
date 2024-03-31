"use client";

import { SERVER_URL } from "../../constant";
import { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./FolderListBar.style";
import { useRouter } from "next/navigation";

interface FolderListBarProps {
  currentFolder: {
    folderName: string;
    folderId: null | number;
  };
  dispatch: any;
}

const FolderListBar: React.FC<FolderListBarProps> = ({
  currentFolder,
  dispatch,
}) => {
  const router = useRouter();
  const [folderData, setFolderData] = useState([]);
  useEffect(() => {
    const request = async () => {
      const req = await axios.get(`${SERVER_URL}/users/4/folders`);
      setFolderData(req.data.data);
    };
    request();
  }, []);

  return (
    <S.ListBox>
      <S.Wrap>
        <S.CategoryBtn
          $current={currentFolder.folderName === "전체"}
          onClick={() => dispatch({ folderName: "전체", folderId: null })}
        >
          전체
        </S.CategoryBtn>
        {folderData
          ? folderData.map((folder: any) => (
              <S.CategoryBtn
                key={folder.id}
                $current={currentFolder.folderName === folder.name}
                onClick={() =>
                  dispatch({ folderName: folder.name, folderId: folder.id })
                }
              >
                {folder.name}
              </S.CategoryBtn>
            ))
          : null}
      </S.Wrap>
      <S.AddFolderBtn
        onClick={() => router.push("/folder/addfolder", { scroll: false })}
      >
        폴더 추가 +
      </S.AddFolderBtn>
    </S.ListBox>
  );
};

export default FolderListBar;
