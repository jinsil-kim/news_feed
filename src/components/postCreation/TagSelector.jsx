import { useState } from 'react';
import { TagSelectorContainer, TagContainer, Tag, TagInput } from '../../style/postCreation/tagSelectorStyle';
import { tagColors } from '../../style/tagColors';

// TODO: 한국말 추가 시 끝 음절이 하나 더 추가됩니다.
// 추가한 태그를 삭제하는 기능도 있으면 좋겠네요.
const TagSelector = ({ tags = [], onAddTag }) => {
  const [tagInput, setTagInput] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && tagInput.trim() && tags.length < 5) {
      // TODO: tagColors를 만드는 함수 분리하기
      const color = tagColors[Math.floor(Math.random() * tagColors.length)];
      onAddTag({ text: tagInput.trim(), color });
      setTagInput('');
      // TODO: Form 태그로 감싸져 있지 않기 때문에 굳이 없어도 되지 않을까요?
      e.preventDefault();
    }
  };

  return (
    // tagselector container
    <TagSelectorContainer>
      <TagContainer>
        {tags.map((tag) => (
          <Tag key={tag.text + tag.color} color={tag.color}>
            {tag.text}
          </Tag>
        ))}
        <TagInput
          type="text"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="운동 종류를 입력하고 Enter로 태그 추가"
        />
      </TagContainer>
    </TagSelectorContainer>
  );
};

export default TagSelector;

// feed image size : 850 * 450
