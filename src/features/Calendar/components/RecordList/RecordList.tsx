import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Record from './Record';

interface Props {
  isRecordListShown: boolean;
}

const RecordList = ({ isRecordListShown }: Props) => {
  const navigate = useNavigate();
  return (
    <AnimatePresence>
      {isRecordListShown && (
        <StyledRecordList
          variants={recordListVariants}
          initial='invisible'
          animate='visible'
          exit='exit'
        >
          {[0, 1, 2, 3, 4, 5, 6].map((record: number) => (
            <Record
              key={record}
              onClick={() => {
                navigate('/view-record');
              }}
            />
          ))}
        </StyledRecordList>
      )}
    </AnimatePresence>
  );
};

const StyledRecordList = styled(motion.div)`
  width: 100%;
  margin-top: 2rem;
  padding-bottom: 12rem;
`;

const recordListVariants = {
  invisible: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export default RecordList;
