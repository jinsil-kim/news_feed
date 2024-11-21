import { useState } from 'react';
import { TagSelectorContainer, TagContainer, Tag, TagInput } from '../../style/postCreation/tagSelectorStyle';
import { tagColors } from '../../style/tagColors';

const TagSelector = ({ tags = [], onAddTag }) => {
  const [tagInput, setTagInput] = useState('');


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
