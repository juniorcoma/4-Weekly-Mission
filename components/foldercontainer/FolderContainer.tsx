"use client";

import { useEffect, useReducer, useState } from "react";
import FolderLinkCard from "../folderlinkcard/FolderLinkCard";
import FolderListBar from "../folderlistbar/FolderListBar";
import FolderOptionBar from "../folderoptionbar/FolderOPtionBar";
import LinkSearchInput from "../linksearchinput/LinkSearchInput";
import * as S from "./FolderContainer.style";
import axios from "axios";
import { SERVER_URL } from "@/constant";

const reducer = (state: any, action: any) => {
  return { ...action };
};

const FolderContainer: React.FC = () => {
  const [currentFolder, dispatch] = useReducer(reducer, {
    folderName: "전체",
    folderId: null,
  });
  const [linkData, setLinkData] = useState([]);
  const [filterData, setFilterData] = useState<any>(null);
  useEffect(() => {
    const linkRequest = async () => {
      const req = await axios.get(`${SERVER_URL}/users/4/links`);
      const data = req.data.data.map((link: any, i: number) => {
        if (i === 3) {
          link.image_source =
            "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png";
        }
        return link;
      });
      setLinkData(data);
    };
    linkRequest();
  }, []);
  useEffect(() => {
    if (currentFolder.folderName !== "전체") {
      const filter = linkData.filter(
        (link: any) => link.folder_id === currentFolder.folderId
      );
      setFilterData(filter);
    } else {
      setFilterData(null);
    }
  }, [currentFolder]);

  return (
    <S.Container>
      <LinkSearchInput />
      <S.Wrapper>
        <FolderListBar dispatch={dispatch} currentFolder={currentFolder} />
        <FolderOptionBar currentFolder={currentFolder.folderName} />
        <S.CardList>
          {!filterData ? (
            linkData.map((link: any) => (
              <li key={link.id}>
                <FolderLinkCard information={link} />
              </li>
            ))
          ) : filterData.length ? (
            filterData.map((link: any) => (
              <li key={link.id}>
                <FolderLinkCard information={link} />
              </li>
            ))
          ) : (
            <div>저장된 링크가 없음</div>
          )}
        </S.CardList>
      </S.Wrapper>
    </S.Container>
  );
};

export default FolderContainer;
