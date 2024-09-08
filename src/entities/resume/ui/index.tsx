import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

import SwitchCase from '@/shared/ui/SwitchCase';
import { getDynamicPath } from '@/shared/utils/path';
import { PagePath } from '@/shared/constant/path';
import Typography from '@/shared/ui/Typography';
import { Chip } from '@/shared/ui/Chip';
import { getDateString } from '@/shared/utils';

import { BottomWrapper, ResumeWrapper } from './styles';

interface Props extends Apis.Resume.Get {}

export default function Resume(props: Props) {
  return (
    <Link to={getDynamicPath(PagePath.RESUME, { id: props.id })}>
      <ResumeWrapper>
        <Typography maxLine={1} ellipsis typoSize="Head6">
          {props.applicantName}
        </Typography>
        <div>
          <Typography maxLine={1} ellipsis typoSize="Title1">
            {props.jobPosition}
          </Typography>
        </div>
        <BottomWrapper>
          <Chip color="info">
            {getDateString(dayjs(Date.now()).diff(props.uploadDate, 'day'))}
          </Chip>
          <Chip
            color={
              props.status === 'accepted'
                ? 'success'
                : props.status === 'rejected'
                ? 'danger'
                : 'primary'
            }
          >
            <SwitchCase
              condition={props.status}
              cases={{
                accepted: '합격',
                pending: '대기중',
                rejected: '불합격',
              }}
            />
          </Chip>
        </BottomWrapper>
      </ResumeWrapper>
    </Link>
  );
}
