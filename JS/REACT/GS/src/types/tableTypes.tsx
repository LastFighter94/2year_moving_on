import {ColumnsType} from "antd/es/table";
import {Switch, Tag} from "antd";
import {Link} from "react-router-dom";

const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
};

export interface QuizzesTableRow {
    key: string;
    id: number | string;
    description: string;
    tags: string[] | null;
    successPercentCutoff: string | number;
    questionsLength: string | number;
}

export const columns: ColumnsType<QuizzesTableRow> = [
    {
        title: 'Description',
        key: 'description',
        dataIndex: 'description',
        render: (_, row) => <p><Link to={"edit-quiz/" + row.id}>{row.description}</Link></p>
    },
    {
        title: 'Id',
        key: 'id',
        dataIndex: 'id',
    },
    {
        title: 'Success Percent Cutoff',
        key: 'successPercentCutoff',
        dataIndex: 'successPercentCutoff',
    },
    {
        title: 'Questions',
        key: 'questionsLength',
        dataIndex: 'questionsLength',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags && tags.map((tag) => {
                let color = tag.length > 5 ? 'blue' : 'green';
                if (tag === 'loser') color = 'volcano';
                return (<Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>);
            })}
            </>
        ),
    },
    {
    title: 'Action',
        key: 'action',
        render: (_, record) => (
            <>
            {/*{record.description}<br/>*/}
            <a>Edit</a><br/>
            <a>Delete</a>
            </>
        ),
    },
    {
        title: 'Visibility',
        key: 'visibility',
        render: (_, record) => (
            <>
                <Switch defaultChecked onChange={onChange} />
            </>
        ),
    },
];