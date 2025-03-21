import { useRecoilValue } from "recoil";
import { isDesktopState } from "../../recoil/atom";
import { useEffect, useState } from "react";
import { Container, Image, SubTitle } from "../styled-components/DefaultStyle";
import { getMenus, imageLink, IMenu } from "../../fetcher";
import { DetailWrapper, ImgBox, ImgWrapper } from "./Eyefat";
import { useTranslation } from "react-i18next";

export function Eyelash() {
  const { t } = useTranslation();
  const isDesktop = useRecoilValue(isDesktopState);
  const link = imageLink + '/eyelash/perm';
  const [menu, setMenus] = useState<IMenu>();


  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const fetchedMenu = await getMenus(4);
        if (fetchedMenu.length > 0) setMenus(fetchedMenu[0]); // 애교살은 메뉴가 1개뿐
      } catch (err) {
        console.error("메뉴 데이터 로딩 실패:", err);
      }
    };
    fetchMenu();
  }, []);

  if (!menu) {
    return (
      <Container>
        <SubTitle>속눈썹 시술 정보를 불러올 수 없습니다.</SubTitle>
      </Container>
    );
  }

  return (
    <Container>
      <SubTitle>{t(menu.name)}</SubTitle>
      <DetailWrapper>{t(menu.description)}</DetailWrapper>
      <ImgWrapper>
        {Array.from({ length: menu.imgCnt }, (_, i) => (
          <ImgBox key={i}>
            <Image
              src={`${link}${i}.jpeg`}
              alt={`${menu.name} 이미지 ${i + 1}`}
            />
          </ImgBox>
        ))}
      </ImgWrapper>
    </Container>
  );
}
