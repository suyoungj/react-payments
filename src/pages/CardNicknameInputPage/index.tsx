import { useEffect, useRef } from 'react';

import Card from '../../components/Card';
import Spacer from '../../components/common/Spacer';
import Input from '../../components/common/Input';

import useCardNicknameInputPage from './useCardNicknameInputPage';
import type { Focus } from '../../components/common/Input';
import type { CardInfo } from '../../domain/types/card';

import styles from './cardNicknameInputPage.module.css';

const CardNicknameInputPage = () => {
  const inputRef = useRef<Focus>(null);
  const {
    lastRegisteredCard,
    nickname,
    handleNicknameSubmit,
    handleNicknameChange,
  } = useCardNicknameInputPage();
  const {
    cardCompany,
    cardNumber1,
    cardNumber2,
    owner,
    expiredMonth,
    expiredYear,
  } = lastRegisteredCard as CardInfo;

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className={styles.container}>
      <Spacer height={180} />
      <h2 className={`${styles.title} text-subtitle`}>
        거의 다 왔어요! 별칭을 입력해 주세요.
      </h2>
      <Spacer height={20} />
      <Card {...card} />
      <Spacer height={124} />
      <form className={styles.formContainer} onSubmit={handleNicknameSubmit}>
        <label>
          <Input
            id="card-nickname"
            className={styles.nicknameInput}
            type="text"
            value={nickname}
            onChange={handleNicknameChange}
            placeholder="카드 별칭 입력(선택)"
            ref={inputRef}
          />
        </label>
        <Spacer height={130} />
        <button className={styles.submitButton}>확인</button>
        <Spacer height={30} />
      </form>
    </div>
  );
};

export default CardNicknameInputPage;
