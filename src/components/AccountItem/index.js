import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avata')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f22646e8398058b89e0d51d1314c3df0~c5_100x100.jpeg?x-expires=1694264400&x-signature=ol7DOC%2FICrJRZKLNxRBCfqZp2%2BY%3D"
                alt="name"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Nam Phuong</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyennamphuong</span>
            </div>
        </div>
    );
}

export default AccountItem;
