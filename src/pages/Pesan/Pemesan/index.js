import React, { PropTypes as T } from 'react';

import Button from '../../../components/Button';
import TextField from '../../../components/TextField';
import TextArea from '../../../components/TextArea';
import { isEmailValid, isPhoneValid, isUserInvalid } from '../../../services/validation';
import '../../pages.css';
import './Pemesan.css';

export default function Pemesan(props) {
  const {
    user,
    onChange,
  } = props;

  const isInvalid = isUserInvalid(user);

  return (
    <div className="Pemesan">
      <div className="Pemesan-heading">
        <div className="Pemesan-heading-title">
          <i className="fa fa-lg fa-address-card" aria-hidden="true"></i>
          {" Data Pemesan"}
        </div>
      </div>
      <div className="Pemesan-body">
        <TextField
          name="name"
          label="Nama"
          placeholder="Nama Lengkap"
          value={user.name}
          onChange={onChange}
          required
          />
        <TextField
          name="nickname"
          label="Panggilan"
          placeholder="Nama Panggilan"
          value={user.nickname}
          onChange={onChange}
          />
        <TextField
          type="email"
          name="email"
          label="Email"
          placeholder="Alamat Email"
          value={user.email}
          onChange={onChange}
          validate={isEmailValid}
          message="Alamat Email tidak valid"
          required
          />
        <TextField
          type="tel"
          display="content"
          name="phone"
          label="No. HP"
          placeholder="081234567890"
          value={user.phone}
          onChange={onChange}
          validate={isPhoneValid}
          message="No. HP tidak valid"
          required
          />
        <TextField
          type="text"
          name="city"
          label="Kota"
          placeholder="Kota Domisili"
          value={user.city}
          onChange={onChange}
          required
          />
        <TextArea
          name="address"
          label="Alamat"
          placeholder="Alamat Lengkap"
          value={user.address}
          rows={4}
          onChange={onChange}
          required
          />
        <TextArea
          name="notes"
          label="Catatan"
          placeholder="Catatan Tambahan"
          value={user.notes}
          onChange={onChange}
          />
      </div>
      <div className="Pemesan-footer">
        <Button
          className="Pemesan-footer-action"
          display="content"
          action={(e) => console.log('Lanjutkan')}
          icon="arrow-right"
          text="Lanjutkan"
          disabled={isInvalid}
          title={isInvalid ? "Masih ditemukan data yang tidak valid" : "Lanjutkan Pemesanan"}
          />
      </div>

    </div>
  )
}

Pemesan.propTypes = {
  user: T.object.isRequired,
  onChange: T.func.isRequired,
}
