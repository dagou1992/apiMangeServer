const table = value => {
  let content = `
|参数|必选|类型|说明|
|:----- |:-------|:-----|----- |
    `;
  for (let item of value) {
    const { name, isRequired, remark, value } = item;
    content += `|${name} |${isRequired} |${value}|${remark} |`;
  }
  return content;
};
const getMarkdown = list => {
  let content = '',
    index = 1;
  for (let item of list) {
    const { name, path, type, requestParam, responseExample } = item;
    const { body, query, rest } = requestParam;
    content += `
### ${index}. ${name}
#### URL
> ${path}
#### HTTP请求方式
> ${type}
${
  body.model === 'form-data' || body.model === 'x-www-form-urlencoded'
    ? `#### 请求参数${table(body.data)}`
    : ''
}
${query.length > 0 ? `#### query参数${table(query)}` : ''}
${rest.length > 0 ? `#### rest${table(rest)}` : ''}
${body.model === 'row' ? `#### 请求示例${body.content}` : ''}
#### 返回示例
\`\`\`json
${responseExample && responseExample.value ? responseExample.value : ''}
\`\`\`
`;

    index += 1;
  }
  return content;
};

module.exports = { getMarkdown };
