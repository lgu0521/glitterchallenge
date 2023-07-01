import type { NextPage } from 'next'
import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { setCookie } from '../hooks/useCookie';
import createClientHttpInstance from '../axios.setting';

export default function Login() {
  const clientHttp = createClientHttpInstance();
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  useEffect(() => {
    //input에 포커스 시켜서 키보드 올리기
    const input = document.querySelector('input')
    input?.focus()
  }, [])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const toStringValue = e.target.value.toString();
    const onlyNumbers = toStringValue.replace(/[^0-9]/g, '');
    let formattedPhoneNumber = '';

    if (onlyNumbers.startsWith('011')) {
      if (onlyNumbers.length >= 4 && onlyNumbers.length <= 6) {
        formattedPhoneNumber = onlyNumbers.replace(/^([0-9]{3})([0-9]{1,3})/, '$1 $2');
      } else if (onlyNumbers.length >= 7) {
        formattedPhoneNumber = onlyNumbers.replace(/^([0-9]{3})([0-9]{3})([0-9]*)/, '$1 $2 $3');
      } else {
        formattedPhoneNumber = onlyNumbers;
      }
    } else {
      if (onlyNumbers.length >= 4 && onlyNumbers.length <= 7) {
        formattedPhoneNumber = onlyNumbers.replace(/^([0-9]{3})([0-9]{1,4})/, '$1 $2');
      } else if (onlyNumbers.length >= 8) {
        formattedPhoneNumber = onlyNumbers.replace(/^([0-9]{3})([0-9]{4})([0-9]*)/, '$1 $2 $3');
      } else {
        formattedPhoneNumber = onlyNumbers;
      }
    }

    setPhoneNumber(formattedPhoneNumber)
  }

  const mutation = useMutation({
    mutationFn: (phoneNumber: string) => {
      return clientHttp.post(`${process.env.NEXT_PUBLIC_API_URL}/auth`, { phoneNumber: phoneNumber });
    },
    onSuccess: async (res) => {
      if (res.status !== 200) alert(res.data.message)

      setCookie("mohmind-accessToken", "Bearer " + res.data.body.accessToken);
      location.href = '/';
    },
    onError: (error: any) => {
      alert(error.response.data.message)
    }
  });


  const handleOnSubmit = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // 휴대본 번호에 들어가있는 공백을 제거
    const resetPhoneNumber = phoneNumber.replace(/\s/g, '');

    mutation.mutate(resetPhoneNumber);
  }, [mutation, phoneNumber])

  return (
    <Wrap>
      <Container>
        <div style={{ paddingTop: "4rem" }}>
          <Title>
            건강한 습관·루틴<br />
            글리어트 챌린지
          </Title>
        </div>
        <div>
          <Input
            type='tel'
            placeholder='전화번호를 입력해주세요.'
            value={phoneNumber}
            onChange={handleInput}
            maxLength={13}
          />
        </div>
        <div>
          <Button onClick={handleOnSubmit}>확인</Button>
        </div>
      </Container>
    </Wrap>
  )
}


const Wrap = styled.div`
  width : 100%;
  height :100%;
  padding : 0 2rem;
  background: #FFFFFF;
`
const Container = styled.div`
  display : flex;
  flex-direction : column;
  width : 100%;
  height :100%;
  background: #FFFFFF;
`
const Title = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  line-height: 150%;
  /* or 56px */

  letter-spacing: -0.3px;
  color: #051B2C;
`

const Input = styled.input`
  border: 0px;
  border-radius : 1rem;
  padding: 1.7rem 2rem;
  width : 100%;
  font-size : 2rem;
  font-weight: 400;
  line-height: 100%;
  margin-top : 2rem;
  border : 1px solid #E5E5E5;
  /* identical to box height, or 16px */

  letter-spacing: -0.3px;

  /* placeHolder */

  ::placeholder {
    color: #C0C0C0;
  }
`

const Form = styled.form`
  
`

const Button = styled.button`
  display: flex;
  width : 100%;
  height: 6rem;
  padding: 2rem 0rem;
  justify-content: center;
  align-items: center;
  background: #FF2B1D;
  border:0px;
  border-radius: 1rem;
  margin-top : 2rem;

  color: #FFF;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.8rem;
  letter-spacing: -0.03rem;
`