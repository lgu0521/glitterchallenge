import type { NextPage } from 'next'
import styled from 'styled-components';
import { useCallback, useEffect, useRef, useState } from 'react';
import GalleryIcon from '../assets/icons/gallery-add-line.svg';
import Box from '../molecules/Box';
import PageHeader from '../organisms/PageHeader';
import { CheckBox } from '../atoms/CheckBox';
import Image from 'next/image';
import { useMutation, useQueryClient } from 'react-query';
import createClientHttpInstance from '../axios.setting';
import { getCookie } from '../hooks/useCookie';
import { useRouter } from 'next/router';

type CreatePostREQ = {
  lemonOilImage: File | null;
  proteinImage: File | null;
  content: string;
  isExercise: boolean;
}

const PostNew: NextPage = () => {
  const clientHttp = createClientHttpInstance();
  const router = useRouter();
  const queryClient = useQueryClient();
  // 레몬오일사진
  const [lemonOilImage, setLemonOilImage] = useState<File | null>(null);
  // 단백질 사진
  const [proteinImage, setProteinImage] = useState<File | null>(null);
  // 내용
  const [content, setContent] = useState<string>('');
  // 운동 여부 체크 박스
  const [isExercise, setIsExercise] = useState<boolean>(false);

  // 버튼 활성화
  const [isButtonActive, setIsButtonActive] = useState<boolean>(false);

  const textreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textreaRef.current) {
      textreaRef.current.style.height = "auto";
      textreaRef.current.style.height = textreaRef.current.scrollHeight + "px";
    }
  }, [content])

  useEffect(() => {
    // 레몬 오일 사진이 있을 경우 버튼을 active 상태로 변경
    if (lemonOilImage) {
      setIsButtonActive(true)
    } else {
      setIsButtonActive(false)
    }
  }, [lemonOilImage])

  const mutation = useMutation({
    mutationFn: (data: FormData) => {
      return clientHttp.post(`${process.env.NEXT_PUBLIC_API_URL}/post`, data, {
        headers: {
          'Authorization': getCookie('mohmind-accessToken'),
          'Content-Type': 'multipart/form-data'
        }
      })
    },
    onSuccess: async (data) => {
      if (!data) return;
      queryClient.invalidateQueries(['my', 'statistics']);
      queryClient.invalidateQueries(['post', 'list']);
      router.push('/');
    }
  });

  const onSubmit = useCallback(() => {
    const formData = new FormData();

    if (lemonOilImage) {
      formData.append('lemonOilImage', lemonOilImage);
    }
    if (proteinImage) {
      formData.append('proteinImage', proteinImage);
    }
    formData.append('content', content);
    formData.append('isExercise', String(isExercise));
    mutation.mutate(formData);
  }, [lemonOilImage, proteinImage, content, isExercise, mutation]);

  return (
    <Wrap>
      <PageHeader />
      <Box css={{
        display: "flex",
        width: "100%",
        borderTop: "1px solid #DDE1E4",
        borderBottom: "0.5px 0 solid #DDE1E4"
      }}>
        <Box css={{ width: "100%" }}>
          <Box css={{
            padding: "1rem",
            textAlign: "center",
            background: "#ffffff",
            borderRight: "0.5px solid #DDE1E4"
          }}>
            <Label>
              레몬오일
            </Label>
          </Box>
          <Box css={{ borderRight: "0.5px solid #ffffff" }}>
            <FileInput
              id="lemon-input"
              type="file"
              accept='.png, .jpg, .jpeg'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const file = e.target.files?.[0];
                if (file) {
                  setLemonOilImage(file);
                }
              }} />
            <label htmlFor="lemon-input">
              {
                lemonOilImage ?
                  <Image src={URL.createObjectURL(lemonOilImage)} alt="레몬오일 사진" fill />
                  : <GalleryIcon viewBox="0 0 24 24" />
              }
            </label>
          </Box>
        </Box>
        <Box css={{ width: "100%" }}>
          <Box css={{ padding: "1rem", textAlign: "center", background: "#ffffff" }}>
            <Label>
              하이드로어트
            </Label>
          </Box>
          <Box>
            <FileInput
              id="protein-input"
              type="file"
              accept='.png, .jpg, .jpeg'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const file = e.target.files?.[0];
                if (file) {
                  setProteinImage(file);
                }
              }} />
            <label htmlFor="protein-input">
              {
                proteinImage ?
                  <Image src={URL.createObjectURL(proteinImage)} alt="단백질 사진" fill />
                  : <GalleryIcon  viewBox="0 0 24 24" />
              }
            </label>
          </Box>
        </Box>
      </Box>
      <TextArea
        ref={textreaRef}
        maxLength={200}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          setContent(e.target.value)
        }}
        value={content}
        placeholder='포곡읍에 올릴 게시글 내용을 작성해주세요. (가품 및 판매금지 물품은 게시가 제한될 수 있어요.)'
      />
      <Box css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: "1rem 2rem",
        borderTop: "0.5px solid #DDE1E4",
        background: "#ffffff",
        marginTop: "auto"
      }}>
        <Label>글리아 수련</Label>
        <CheckBox onClick={() => {
          setIsExercise(!isExercise)
        }} />
      </Box>
      <Button disabled={!isButtonActive} onClick={onSubmit}>
        게시하기
      </Button>
    </Wrap>
  )
}

const Wrap = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  background: #F8F9FA;
  height :100%;
  width : 100%;
`
const Label = styled.label`
  font-weight: 400;
  font-size: 1.6rem;
  text-align: center;
  letter-spacing: -0.3px;
  color: #051B2C;
`
const FileInput = styled.input`
  display : none;

  & + label {
    position : relative;
    display : flex;
    justify-content : center;
    align-items : center;
    width : 100%;
    height : 13rem;
    background: #EBEDEF;
    cursor : pointer;
    img{
      object-fit : cover;
    }
  }
`
const TextArea = styled.textarea`
  width : 100%;
  padding: 2rem;
  min-height : 15rem;
  resize : none;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 150%;
  letter-spacing: -0.3px;

  ::placeholder {
    color: #AAB4BC;
  }
`
const Button = styled.button`
  width : 100%;
  background:#FE4C40;
  border:none;
  padding: 2rem;

  font-weight: 700;
  font-size: 1.5rem;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.3px;
  color: #FFFFFF;

  :disabled{
    opacity : 0.4;
  }

  :hover, :focus{
    background:#FF2B1D
  }
`

export default PostNew
