'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from next/router
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Input } from '@/components/atoms/Input';
import { Button } from '@/components/atoms/Button/Button';
import StyledForm from '@/components/molecules/StyledForm/StyledForm';
import { useRemindMutation } from '@/lib/redux/api/authApi';

type RemindFormProps = {
    buttonTitle: string;
}

const RemindForm: React.FC<RemindFormProps> = ({ buttonTitle }) => {

    const [formData, setFormData] = useState<{ email: string }>({ email: '' });

    const [remind, { isLoading, isError, isSuccess }] = useRemindMutation();
    const router = useRouter(); // Initialize useRouter

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            console.log("remind" + formData.email);
            await remind(formData.email);
        } catch (error) {
            console.error(error);
        }
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    useEffect(() => {
        if (isSuccess) {
            toast.success('Password was sent to your email');
            router.push('/auth/login'); // Redirect to /auth/login after success
        } else if (isError) {
            toast.error('Error sending email', { autoClose: false });
        }
    }, [isSuccess, isError, router]);

    return (
        <StyledForm>
            <form onSubmit={handleSubmit}>
                <Input type="email" required name="email" placeholder="Email" value={formData.email} onChange={onChangeHandler} />
                <Button type="submit" disabled={isLoading}>{isLoading ? 'Sending...' : buttonTitle}</Button>
            </form>
        </StyledForm>
    );
};

export default RemindForm;
