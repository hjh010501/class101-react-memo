import styled from 'styled-components/macro';

import Block from 'app/components/Block';
import SmallButton from 'app/components/Button/SmallButton';
import { TitleText } from 'app/components/Text';
import SearchInput from 'app/components/Input/SearchInput';

import { ReactComponent as PostDeleteIcon } from './assets/delete_black_24dp.svg';
import { ReactComponent as PostAddIcon } from './assets/post_add_black_24dp.svg';
import { ReactComponent as MakeBoldIcon } from './assets/format_bold_black_24dp.svg';
import { ReactComponent as MakeSizeIcon } from './assets/text_fields_black_24dp.svg';
import { ReactComponent as MakeTodo } from './assets/check_circle_black_24dp.svg';
import { ReactComponent as MakeImageIcon } from './assets/collections_black_24dp.svg';

import ReactQuill from 'react-quill';

let icons = ReactQuill.Quill.import('ui/icons');

icons['header'] = <MakeSizeIcon />;
icons['bold'] = <MakeBoldIcon />;
icons['list'] = <MakeTodo />;
icons['image'] = <MakeImageIcon />;

const Box = styled.div`
  width: 100%;
  height: 60px;
  background-color: #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0 !important;
  border-bottom: 1px solid #e9e9e9 !important;
  padding: 0 !important;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
  }
`;

const LeftMenu = styled(Menu)`
  width: 300px;
  height: 100%;
  background-color: #fff;
  border-right: 1px solid #e9e9e9;
  padding: 0 10px;
`;

const RightMenu = styled(Menu)`
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 0 10px;
`;

export default function MemoToolBar() {
  return (
    <Box id="toolbar">
      <LeftMenu>
        <TitleText style={{ marginLeft: '5px' }}>MEMO</TitleText>
        <SmallButton Icon={() => <PostDeleteIcon />} />
      </LeftMenu>
      <RightMenu>
        <SmallButton Icon={() => <PostAddIcon />} />
        <div>
          <SmallButton
            className="ql-header"
            value="1"
            Icon={() => <MakeSizeIcon />}
          />
          <Block marginRight="5px" />
          <SmallButton className="ql-bold" Icon={() => <MakeBoldIcon />} />
          <Block marginRight="5px" />
          <SmallButton
            className="ql-list"
            value="check"
            Icon={() => <MakeTodo />}
          />
        </div>
        <div>
          <SmallButton className="ql-image" Icon={() => <MakeImageIcon />} />
          <Block marginRight="10px" />
          <SearchInput />
        </div>
      </RightMenu>
    </Box>
  );
}
