import { useState } from 'react';
import { TagSelectorContainer, TagContainer, Tag, TagInput } from '../../style/postCreation/tagSelectorStyle';

const TagSelector = ({ tags = [], onAddTag }) => {
  const [tagInput, setTagInput] = useState('');

  // chatGPT 추천 컬러코드
  const tagColors = [
    '#FFB3BA',
    '#FFDFBA',
    '#FFFFBA',
    '#BAFFC9',
    '#BAE1FF',
    '#E0BBE4',
    '#FFB7B2',
    '#FFDAC1',
    '#B5EAD7',
    '#C7CEEA'
  ];

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && tagInput.trim() && tags.length < 5) {
      const color = tagColors[Math.floor(Math.random() * tagColors.length)];
      onAddTag({ text: tagInput.trim(), color });
      setTagInput('');
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
