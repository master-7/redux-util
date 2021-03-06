import {
    actionCreator,
    genericActionType,
    genericActionCreator
} from '../src/index';

describe('action creator', () => {
    it('with one param', () => {
        const type = 'action type';
        const param = 'param';
        const creator = actionCreator(type, param);
        expect(creator(1)).toEqual({
            type,
            [param]: 1
        })
    });

    it('with 2 params', () => {
        const type = 'action type';
        const params = ['param1', 'param2'];
        const creator = actionCreator(type, ...params);
        expect(creator(1, 2)).toEqual({
            type,
            [params[0]]: 1,
            [params[1]]: 2
        })
    })
});

describe('genericActionType', () => {
    it('should create prefixed action type',  () => {
        const prefixedActionType = genericActionType('prefix', 'type');
        expect(prefixedActionType).toEqual('prefix_type')
    });

    it('should create non-prefixed action type', () => {
        const actionType = genericActionType('', 'type');
        expect(actionType).toEqual('type')
    })
});

describe('generic action creator', () => {
    it('should create generic action', () => {
        const type = 'type';
        const prefix = 'prefix';
        const genericAction = genericActionCreator(type, 'param');
        const prefixedAction = genericAction(prefix);
        expect(prefixedAction(1)).toEqual({
            type: genericActionType(prefix, type),
            param: 1
        })
    })
});