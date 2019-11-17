import React from 'react';
import { Result, Button } from 'antd';

function PageNotFound() {
    return (
        <div>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<a href="/"><Button type="primary">Back Home</Button></a>}
            />,
        </div>
    );
}

export default PageNotFound;
