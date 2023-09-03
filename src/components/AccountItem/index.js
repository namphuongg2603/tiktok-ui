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
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/c278038803f3842ebff856a11136280c~c5_300x300.webp?x-expires=1693900800&x-signature=d3z%2BcX%2FXluc9xFaHGaHHq965o2g%3D"
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
