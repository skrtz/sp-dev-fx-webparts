import { IconButton, Stack, TextField } from '@fluentui/react';
import * as React from 'react';

export interface IUserMessageProps {
    onMessageChange: (query: string) => void;
    sendQuery: () => Promise<void>;
}

export default class UserMessage extends React.Component<IUserMessageProps, {}> {

    private _onChange = (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newText: string): void => {
        this.props.onMessageChange(newText);
    }

    private _handleClick = async (): Promise<void> => {
        await this.props.sendQuery();
    }

    public render(): React.ReactElement<IUserMessageProps> {
        return (
            <Stack horizontal tokens={{ childrenGap: 5 }}>
                  <Stack.Item grow={1}>
                      <TextField multiline autoAdjustHeight onChange={this._onChange} label="User message" placeholder="Type user query here." />
                  </Stack.Item>
                  <Stack.Item align="end">
                      <IconButton iconProps={{ iconName: 'Send' }} title="Send" ariaLabel="Send" onClick={this._handleClick} />
                  </Stack.Item>
              </Stack>
        );
    }
}